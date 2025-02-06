import json
from business.passenger.controllers.passengerController import search_pasenger_by_passport
from business.sale.controllers.saleController import search_sale_by_reservation
from business.seat.controllers.seatController import search_seat_return_objet
import ast
from db import Session
from ..models.TicketClass import Ticket


def search_ticket_by_resrvationNumber(data):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(reservation_number=data).first()
        session.close()
        return user
    except:
        return False


def data_check(data):
    passenger = search_pasenger_by_passport(data["passport_number"])
    sale = search_sale_by_reservation(data["reservation_number"])
    reservation = search_ticket_by_resrvationNumber(data["reservation_number"])
    print(reservation)
        

    if passenger == None:
        raise ValueError("passenger not found")
    if sale == None:
        raise ValueError("sale not found")
    if sale.passenger_data != passenger.id:
        raise ValueError("Sale not belong to this passenger")
    if reservation:
        raise ValueError("Ticket alredy exist")
    

    requiredVisa = sale.flightDetail.destinationDetail.requiered_visa
    if (requiredVisa and not data["visa_check"]):
        raise ValueError("destination requered visa")
    
    return sale

def data_update(data):
    sale = data_check(data)
    print(sale.flightDetail)
    data["seat"] = []
    for individualSeat in ast.literal_eval(sale.seat_data):

        data["gate"] = sale.flightDetail.destinationDetail.airportDetail.gates
        data["airline"] = sale.flightDetail.airlineDetail[0].id
        data["group"] = sale.flightDetail.group
        data["seat"].append(search_seat_return_objet(int(individualSeat)).seat)
        data["terminal"] = sale.flightDetail.terminal
        data["flight"] = sale.flightDetail.id
        data["flightDetail"] = sale.flightDetail
        data["reservation_number"] = sale.reservation_number
    return data
