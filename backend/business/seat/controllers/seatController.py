from business.seat.models.seatClass import Seat
from db import Session
import ast
from business.flight.models.flightClass import Flight
from business.flight.controllers.flightController import search_flight_by_id
from pprint import pprint

# ['FC','BC','PC','EC']


def seatCheck(airplane, wantedFare, wantedSeat, flight):
    if search_seat_return_objet(wantedSeat) != None:
        raise ValueError("seat not avaliable")
    airplane = ast.literal_eval(airplane.fare)

    if wantedFare not in airplane:
        raise ValueError(f" flight doesn't have class '{wantedFare}' ")
    return seatCheckConditional(wantedSeat, airplane, wantedFare, flight)


def seatCheckConditional(wantedSeat, airplane, wantedFare, flight):
    condition = False
    seatPerClass = {
                    "FC": ["A", "B"],
                    "BC": ["A", "B", "C"],
                    "PC": ["A", "B", "C", "D"],
                    "EC": ast.literal_eval(flight.row)}

    seatNumber = int(wantedSeat[1:3])
    seatRow = wantedSeat[0:1]

    startRange, endRange = checkSeatRange(airplane, wantedFare, flight)
    print(startRange, endRange)

    if (seatNumber > startRange and seatNumber <= endRange) and (seatRow in seatPerClass[wantedFare]):
        condition = True
    return condition


def checkSeatRange(airplane, wantedFare, flight):
    seatRangesAux = {
        "FC": 6,
        "BC": 6,
        "PC": 8,
        "EC": flight.column
    }

    start = 0
    for airplaneFare in airplane:
        if airplaneFare == wantedFare:
            end = start + seatRangesAux[airplaneFare]
            break
        else:
            start += seatRangesAux[airplaneFare]

    if end > seatRangesAux["EC"]:
        end = seatRangesAux["EC"]

    return start, end


def createSeat(Data):
    seat = Seat()
    seat.createSeat(Data)
    seat.save()
    return seat


def search_seat_return_objet(wantedSeat):
    session = Session()
    if isinstance(wantedSeat, str):
        search = session.query(Seat).filter_by(seat=wantedSeat).first()

    elif isinstance(wantedSeat, int):
        search = session.query(Seat).filter_by(id=wantedSeat).first()
    session.close()
    if search:
        return search


def search_seats(flightObject, fareData):
    session = Session()

    final_schema = []

    flightObject = search_flight_by_id(flightObject)
    session.add(flightObject)
    airplaneFare = ast.literal_eval(flightObject.airplaneDetail.fare)

    if fareData not in airplaneFare:
        return {}

    seatPerClass = {
                "FC": ["A", "B"],
                "BC": ["A", "B", "C"],
                "PC": ["A", "B", "C", "D"],
                "EC": ast.literal_eval(flightObject.row)}
    start, stop = checkSeatRange(airplaneFare, fareData, flightObject)
    start += 1
    stop += 1

    seats = session.query(Seat).filter_by(flight=flightObject.id, fare=fareData).all()
    for number in range(start, stop):
        for letter in seatPerClass[fareData]:
            schemaSeat = letter + str(number)
            final_schema.append({"seat": schemaSeat, "occupied": False})
    count = 0
    for item in seats:
        for remplace in final_schema:
            if remplace["seat"] == item.seat:
                ocupate = {"seat": item.seat, "occupied": True}
                final_schema[count] = ocupate
            count += 1

    list_by_letter = {}
    for letter in seatPerClass[fareData]:
        list_by_letter[letter] = []
        for seat in final_schema:
            if letter == seat["seat"][0:1]:
                list_by_letter[letter].append(seat)
    return list_by_letter
