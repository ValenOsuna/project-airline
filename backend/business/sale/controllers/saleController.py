from ..models.saleClass import Sale
from flask import jsonify
from db import Session
from business.flight.models.flightClass import Flight
from business.destination.models.destinationClass import Destination
from sqlalchemy.orm import joinedload

from business.seat.controllers.seatController import seatCheck, createSeat, search_seat_return_objet
from business.passenger.controllers.passengerController import search_pasenger_by_passport, validation_passport
from business.airplane.controllers.airplaneControllers import search_airplane_by_id, airplane_data
from business.flight.controllers.flightController import search_flight_by_id
from business.luggage.controllers.luggageController import search_luggage_by_id

from datetime import datetime, timedelta
import json


def createSale(data):
    try:
        dataUpdate = dataUpdater(data)
        sale = Sale()
        sale.createSale(dataUpdate)
        sale.save()
        return sale.to_dict()
    except:
        raise

    #except ValueError as exception:
        return jsonify({"msg": "sale could not be loaded", "keyError": str(exception)})

    #except:
        return jsonify({"msg": "destination could not be loaded",
                        "DestinationAttributes": {
                                                "issue_date": "--",
                                                "reservation_number": "--",
                                                "passenger_data": "--",
                                                "pay_method": "--",
                                                "accumulated_miles": "--",
                                                "fare": "--",
                                                "passenger_data": "--",
                                                "price": "--",
                                                "flight": "--",
                                                "luggage": "--",
                                                "seat": "--"}}), 400


def updateSale(**kwargs):
    session = Session()
    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No data has been sent to modify the id: '{id}'"}), 400
    id = kwargs.get("id")
    sale = search_sale_by_id(id)

    if not sale:
        return jsonify({"msg": "Sale not found", "keyError": "id"}), 404
    for key, value in kwargs.items():
        if hasattr(sale, key):
            setattr(sale, key, value)
    session.add(sale)
    session.commit()
    session.close()
    return jsonify({"msg": "Sale updated successfully"}), 200


def deleteSale(id):
    session = Session()
    sale = search_sale_by_id(id)
    if not sale:
        return jsonify({"msg": "Sale not found", "keyError": "id"}), 404
    session.delete(sale)
    session.commit()
    session.close()
    return jsonify({"msg": "Sale deleted successfully"}), 200


def readSale(id):
    session = Session()
    sale = search_sale_by_id(id)
    if not sale:
        return jsonify({"msg": "Destination not found", "keyError": "id"}), 404
    session.close()
    return sale.to_dict()


def search_sale_by_id(id):
    session = Session()
    sale = session.query(Sale).where(Sale.id == id).first()
    session.close()
    return sale


def dataUpdater(data):
    session = Session()
    flight = search_flight_by_id(data["flight"])
    passenger = search_pasenger_by_passport(data["passenger_data"])
    luggage = search_luggage_by_id(data["luggage"])
    if luggage is None:
        raise ValueError("luggage")
    if flight is None:
        raise ValueError("flight")
    if passenger is None:
        raise ValueError("passenger_data")
    if validation_passport(passenger.passport_expiration) == False:
        raise ValueError("Expired passport")

    data["luggage"] = luggage.id
    data["flight"] = flight.id
    data["passenger_data"] = passenger.id

    airplane = search_airplane_by_id(flight.airplane)
    if airplane.capacity > 0:
        airplane.capacity -= 1
    else:
        raise ValueError("The airplane is full")

    data_luggage = airplane_data(airplane, data["fare"], luggage.type)
    if data_luggage is None:
        raise ValueError("Fare not allowed for this airplane")

    data["seat_data"] = []

    seatCount = 0
    for individualSeat in data["seat"]:
        seatCheck(airplane, data["fare"], individualSeat, flight)
        seatCount += 1
        data["seat"] = individualSeat
        individualSeatID = createSeat(data)
        data["seat_data"].append(individualSeatID.id)

    passenger.accumulated_miles = (data["price"] * 0.1 * seatCount) + passenger.accumulated_miles
    data["accumulated_miles"] = passenger.accumulated_miles

    data["seat_data"] = json.dumps(data["seat_data"])

    session.add(airplane)
    session.add(passenger)
    session.commit()
    session.close()
    return data


def cancelFlight(id):
    sale = search_sale_by_id(id)
    if sale is None:
        raise ValueError("sale id")
    flight = search_flight_by_id(sale.flight)
    passenger = search_pasenger_by_passport(sale.passenger_data)
    departure_time = datetime.strptime(flight.departure_time, "%Y-%m-%d %H:%M")
    current_date = datetime.now()
    if departure_time - current_date <= timedelta(days=1):
        return {"msg": "Flight cannot be canceled within 24 hours of departure"}
    else:
        session = Session()
        passenger.accumulated_miles -= (sale.price * 0.1)
        deleteSale(sale.id)
        session.add(passenger)
        session.commit()
        session.close()
        return {"msg": "Flight canceled succes"}


def search_sale_by_reservation(reservation_number):
    session = Session()
    sale = session.query(Sale).options(
        joinedload(Sale.flightDetail).joinedload(Flight.airlineDetail),
        joinedload(Sale.flightDetail).joinedload(Flight.destinationDetail).joinedload(Destination.airportDetail)
    ).filter(Sale.reservation_number == reservation_number).first()
    session.close()
    return sale


def search_list_sale(issueDate):
    session = Session()
    list = session.query(Sale).filter(Sale.issue_date.like(f'%{issueDate}%'))
    results = []
    for item in list:
        results.append(item.to_dict())
        print(item.to_dict())
    return results


price = {
    "FC": 2,
    "BC": 1.6,
    "PC": 1.4,
    "EC": 1}


def price_fare(wantedFare, flightID):
    flight = search_flight_by_id(flightID)
    print("a", vars(flight))
    if wantedFare in price:
        return f"{price[wantedFare] * flight.price}"
    else:
        return wantedFare
