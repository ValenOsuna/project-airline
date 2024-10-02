from business.seat.models.seatClass import Seat
from db import Session
import ast


#['FC','BC','PC','EC']

def seatCheck(airplane, wantedFare, wantedSeat, flight):
    
    if search_seat_return_objet(wantedSeat) != None:
        raise ValueError("seat not avaliable")
    
    airplane = ast.literal_eval(airplane.fare)
    
    return seatCheckConditional(wantedSeat, airplane , wantedFare, flight)

def seatCheckConditional(wantedSeat , airplane , wantedFare, flight):
    condition = False
    seatPerClass = {
                    "FC" : ["A" , "B"],
                    "BC" : ["A" , "B" , "C"],
                    "PC" : ["A" , "B" , "C"],
                    "EC" : ast.literal_eval(flight.row)}

    seatNumber = int(wantedSeat[1:3])
    seatRow = wantedSeat[0:1]

    startRange , endRange =  checkSeatRange(airplane, wantedFare, flight)

    if (seatNumber > startRange and seatNumber <= endRange) and (seatRow in seatPerClass[wantedFare]):
        condition = True
    
    return condition

def checkSeatRange(airplane , wantedFare, flight):
    seatRangesAux = {
        "FC" : 6,
        "BC" : 6,
        "PC" : 8,
        "EC" : flight.column
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

    return start , end


def createSeat(Data):
    seat = Seat()
    seat.createSeat(Data)
    seat.save()
    return seat


def search_seat_return_objet(wantedSeat):
    session = Session()
    if type(wantedSeat) == str:
        search = session.query(Seat).filter_by(seat=wantedSeat).first()
    elif type(wantedSeat) == int:
        search = session.query(Seat).filter_by(id=wantedSeat).first()
    session.close()
    if search:
        return search