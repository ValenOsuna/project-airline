from business.passenger.controllers.passengerController import search_pasenger_by_passport, validation_passport
from business.flight.controllers.flightController import search_flight_by_id
from business.luggage.controllers.luggageController import search_luggage_by_id
from business.airplane.controllers.airplaneControllers import search_airplane_by_id
from db import Session

def verifyData(data):
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
    
    session.add(flight)
    airplane = flight.airplaneDetail

    if airplane.capacity > 0:
        airplane.capacity -= 1
    else:
        raise ValueError("The airplane is full")
    
    session.close()
    
    return flight , passenger , luggage , airplane