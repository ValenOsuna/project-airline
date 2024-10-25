from business.passenger.controllers.passengerController import search_pasenger_by_passport
from business.sale.controllers.saleController import search_sale_by_reservation
from business.seat.controllers.seatController import search_seat_return_objet


def data_check(data):
    passenger = search_pasenger_by_passport(data["passport_number"])
    sale = search_sale_by_reservation(data["reservation_number"])
    if passenger == None:
        raise ValueError("passenger")
    if sale == None:
        raise ValueError("sale")
    if sale.passenger_data != passenger.id:
        raise ValueError("Sale not belong to this passenger")
    return sale


def data_update(data):
    sale = data_check(data)
    data["gate"] = sale.flightDetail.destinationDetail.airportDetail.gates
    data["airline"] = sale.flightDetail.airlineDetail[0].id
    data["group"] = sale.flightDetail.group
    data["seat"] = search_seat_return_objet(int(sale.seat_data)).seat
    data["terminal"] = sale.flightDetail.terminal
    data["flight"] = sale.flightDetail.id
    return data
