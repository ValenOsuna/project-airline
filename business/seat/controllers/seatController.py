from business.seat.models.seatClass import Seat
from db import Session
import ast


def seatCheck(airplane, fare, seat, flight):
    if search_seat_return_objet(seat) != None:
        raise ValueError("seat not avaliable")
    airplane = ast.literal_eval(airplane.fare)

    if len(airplane) == 4:
        if fare == "FC":
            return seatFC(seat, 0)

        elif fare == "BC":
            return seatBC(seat, 6)

        elif fare == "PC":
            return seatPC(seat, 12)

        elif fare == "EC":
            return seatEC(seat, flight, 20)

    if airplane == ['BC', 'PC', 'EC']:
        if fare == "BC":
            return seatBC(seat, 0)

        elif fare == "PC":
            return seatPC(seat, 6)

        elif fare == "EC":
            return seatEC(seat, flight, 14)

#['FC','BC','PC','EC']


def seatFC(seat, nro):
    seatNumber = int(seat[1:3])
    if (seatNumber > nro and seatNumber <= nro + 6) and (seat[0:1] == "A" or seat[0:1] == "B"):
        return True
    else:
        return False


def seatBC(seat, nro):
    seatNumber = int(seat[1:3])
    if (seatNumber > nro and seatNumber <= nro + 6) and (seat[0:1] == "A" or seat[0:1] == "B" or seat[0:1] == "C"):
        return True
    else:
        return False


def seatPC(seat, nro):
    seatNumber = int(seat[1:3])
    if (seatNumber > nro and seatNumber <= nro + 8) and (seat[0:1] == "A" or seat[0:1] == "B" or seat[0:1] == "C" or seat[0:1] == "D"):
        return True
    else:
        return False


def seatEC(seat, flight, nro):
    seatNumber = int(seat[1:3])
    if (seatNumber > nro and seatNumber <= flight.column) and (seat[0:1] == "A" or seat[0:1] == "B" or seat[0:1] == "C" or seat[0:1] == "D") :
        return True
    else:
        return False


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


prueba = {
    "FC": 6,
    "BC": 6,
    "PC": 8
}
