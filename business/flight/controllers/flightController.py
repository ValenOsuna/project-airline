from ..models.flightClass import Flight
from flask import jsonify
from db import Session
import ast

from business.destination.controllers.destinationController import search_destination_by_id
from business.airport.controllers.airportController import search_airport_by_id
from business.airplane.controllers.airplaneControllers import search_airplane_by_id


def createFlight(data):
    try:
        flight = Flight()
        register_flight(data)
        data = verification_airplane(data)
        flight.Cargar(data)
        flight.save()
        return flight

    except:
        return jsonify({"msg": "No se ha podido cargar el vuelo ",
                        "AtributosObjeto": "destination, origin, departure_time, boarding_time, airplane"}), 400


def updateFlight(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No se han enviado datos para modificar el id: '{id}'"}), 400

    id = kwargs.get("id")
    flight = search_flight_by_id(id=id)

    if not flight:
        return jsonify({"msg": "Vuelo no encontrado", "keyError": "id"}), 404

    for key, value in kwargs.items():
        if hasattr(flight, key):
            setattr(flight, key, value)

    session.add(flight)
    session.commit()
    session.close()

    return jsonify({"msg": "Vuelo actualizado correctamente"}), 200


def search_flight_by_id(id):
    session = Session()
    user = session.query(Flight).filter_by(id=id).first()
    session.close()
    return user


def deleteFlight(id):
    session = Session()
    flight = session.query(Flight).filter_by(id=Flight.id).first()
    if not flight:
        return jsonify({"msg": "Vuelo no encontrado", "keyError": "id"}), 404

    session.delete(flight)
    session.commit()
    session.close()
    return jsonify({"msg": "Vuelo borrado con exito"}), 200


def readFlight(id):
    session = Session()
    flight = session.query(Flight).filter_by(id=Flight.id).first()
    if not flight:
        return jsonify({"msg": "Vuelo no encontrado", "keyError": "id"}), 404
    session.close()

    return jsonify({"origin": f"{flight.origin}",
                    "destination": f"{flight.destination}",
                    "boarding time": f"{flight.boarding_time}",
                    "departure time": f"{flight.departure_time}",
                    "airplane": f"{flight.airplane}"}), 200


def register_flight(data):
    destination = search_destination_by_id(data["destination"])
    origin = search_destination_by_id(data["origin"])
    final_destination_airport = search_airport_by_id(destination.airport)
    origin_airport = search_airport_by_id(origin.airport)
    if destination == None:
        raise ValueError("destination")
    if origin == None:
        raise ValueError("origin")
    if final_destination_airport == None:
        raise ValueError("final airport")
    if origin_airport == None:
        raise ValueError("final origin")


def verification_airplane(data):
    airplane = search_airplane_by_id(data["airplane"])
    if airplane == None:
        raise ValueError("airplane not found")
    row = ast.literal_eval(data["row"])
    data["column"] = int(airplane.capacity / len(row))
    return data
