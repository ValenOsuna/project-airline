from ..models.saleClass import Sale
from flask import jsonify
from db import Session
from business.flight.models.flightClass import Flight

from business.seat.controllers.seatController import seatCheck, createSeat, search_seat_return_objet
from business.pasenger.controllers.pasengerController import search_pasenger_by_id, validation_passport
from business.airplane.controllers.airplaneControllers import search_airplane_by_id , airplane_data
from business.flight.controllers.flightController import search_flight_by_id
from business.luggage.controllers.luggageController import search_luggage_by_id

from datetime import datetime, timedelta

def  createSale(data):
#    try:
        dataUpdate = dataUpdater(data)
        

        sale = Sale()
        sale.createSale(dataUpdate)
        sale.save()
        return jsonify({"msg" : "sale created successfully"})
    
#    except ValueError as exception:
        return jsonify ({"msg" : "sale could not be loaded" ,"keyError" : str(exception)})
    
#   except:
        return jsonify ({"msg" : "destination could not be loaded" , 
                        "DestinationAttributes": {
                                                "issue_date": "--",
                                                "reservation_number": "--",
                                                "pasenger_data": "--",
                                                "pay_method": "--",
                                                "accumulated_miles": "--",
                                                "fare" : "--",
                                                "pasenger_data": "--",
                                                "price": "--",
                                                "flight": "--",
                                                "luggage": "--"}}) , 400
    
def updateSale(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No data has been sent to modify the id: '{id}'"}),400
    
    id = kwargs.get("id")
    sale = search_sale_by_id(id)

    if not sale:
        return jsonify({"msg" : "Sale not found" , "keyError" : "id"}), 404    
    
    for key, value in kwargs.items():
        if hasattr(sale, key):
            setattr(sale, key, value)

    session.add(sale)
    session.commit()
    session.close()

    return jsonify({"msg" : "Sale updated successfully"}),200

def deleteSale(id):
    session = Session()
    sale = search_sale_by_id(id)
    if not sale:
        return jsonify({"msg" : "Sale not found" , "keyError" : "id"}), 404
    
    session.delete(sale)
    session.commit()
    session.close()
    return jsonify({"msg" : "Sale deleted successfully" }), 200


def readSale(id):
    session = Session()
    sale = search_sale_by_id(id)
    if not sale:
        return jsonify({"msg" : "Destination not found" , "keyError" : "id"}), 404 
    session.close()

    return jsonify({"issue_date": sale.issue_date,
                    "reservation_number": sale.reservation_number,
                    "pasenger_data": sale.pasenger_data,
                    "pay_method": sale.pay_method,
                    "accumulated_miles": sale.accumulated_miles,
                    "fare": sale.fare,
                    "price": sale.price,
                    "flight" : sale.flight,
                    "luggage" : sale.luggage}), 200


             
def search_sale_by_id(id):
        session = Session()
        sale = session.query(Sale).where(Sale.id == id).first()
        print()
        session.close()
        
        return sale

def dataUpdater(data):
    session = Session()
    flight = search_flight_by_id(data["flight"])
    pasenger = search_pasenger_by_id(data["pasenger_data"])
    luggage = search_luggage_by_id(data["luggage"])
  

    if luggage is None:
        raise ValueError("luggage")
    if flight is None :
        raise ValueError("flight")
    if pasenger is None:
        raise ValueError("pasenger_data")
    if validation_passport(pasenger.day_pasaport) == False:
        raise ValueError("Expired passport")
    
    airplane = search_airplane_by_id(flight.airplane)
    


    if airplane.capacity > 0:
        airplane.capacity -= 1
    else:  
        raise ValueError("The airplane is full")

    seat = seatCheck(airplane, data["fare"], data["seat"], flight)
    print(seat)
    if seat == False:
        raise ValueError("seat not avaliable")
    

    data_luggage = airplane_data(airplane, data["fare"], luggage.type)
    if data_luggage is None:
        raise ValueError("Fare not allowed for this airplane")

    data["accumulated_miles"] = (data["price"] * 0.1) + pasenger.accumulated_miles
    pasenger.accumulated_miles = data["accumulated_miles"]

    data["luggage"] = luggage.id
    data["flight"] = flight.id
    data["pasenger_data"] = pasenger.id
    createSeat(data)
    data["seat_data"] = search_seat_return_objet(data["seat"]).id
    session.add(airplane)
    session.add(pasenger)
    session.commit()
    session.close()
    return data


def cancelFlight(id):
    sale = search_sale_by_id(id)
    if sale is None:
        raise ValueError("sale id")
   
    flight = search_flight_by_id(sale.flight)
    pasenger = search_pasenger_by_id(sale.pasenger_data)

    departure_time = datetime.strptime(flight.departure_time, "%Y-%m-%d %H:%M")

    current_date = datetime.now()
    if departure_time - current_date <= timedelta(days=1):
        return{"msg":"Flight cannot be canceled within 24 hours of departure"}
    else:
        session = Session()
        pasenger.accumulated_miles -= (sale.price * 0.1)
        deleteSale(sale.id)
        session.add(pasenger)
        session.commit()
        session.close()

        return {"msg":"Flight canceled succes"}
    
def search_sale_by_reservation(reservation_number):
        session = Session()
        sale = session.query(Sale).filter(Sale.reservation_number == reservation_number).first()
        
       # session.close()
        return sale
