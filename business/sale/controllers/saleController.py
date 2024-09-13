from ..models.saleClass import Sale
from flask import jsonify
from db import Session
from business import search_plane_by_id , search_pasenger_by_id,  search_ticket_by_id, plane_data, search_flight_by_id, validation_passport


def  createSale(data):
    try:
        dataUpdate = dataUpdater(data)
        

        sale = Sale()
        sale.createSale(dataUpdate)
        sale.save()
        return jsonify({"msg" : "sale created successfully"})
    
    except ValueError as exception:
        return jsonify ({"msg" : "destination could not be loaded" ,"keyError" : str(exception)})
    
    except:
        return jsonify ({"msg" : "destination could not be loaded" , 
                        "DestinationAttributes": {
                                                "issue_date": "--",
                                                "reservation_number": "--",
                                                "pasenger_data": "--",
                                                "pay_method": "--",
                                                "accumulated_miles": "--",
                                                "fare" : "--",
                                                "pasenger_data": "--",
                                                "ticket_data": "--",
                                                "plane_data": "--"}}) , 400
    
def updateSale(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No data has been sent to modify the id: '{id}'"}),400
    
    id = kwargs.get("id")
    sale = search_by_id(id)

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
    sale = search_by_id(id)
    if not sale:
        return jsonify({"msg" : "Sale not found" , "keyError" : "id"}), 404
    
    session.delete(sale)
    session.commit()
    session.close()
    return jsonify({"msg" : "Sale deleted successfully" }), 200


def readSale(id):
    session = Session()
    sale = search_by_id(id)
    if not sale:
        return jsonify({"msg" : "Destination not found" , "keyError" : "id"}), 404 
    session.close()

    return jsonify({"issue_date": sale.issue_date,
                    "reservation_number": sale.reservation_number,
                    "pasenger_data": sale.pasenger_data,
                    "pay_method": sale.pay_method,
                    "accumulated_miles": sale.accumulated_miles,
                    "fare": sale.fare,
                    "ticket_data": sale.ticket_data,
                    "plane_data": sale.plane_data}), 200


             
def search_by_id(id):
        session = Session()
        sale = session.query(Sale).filter_by(id = id).first()
        session.close()
        return sale

def dataUpdater(data):
    session = Session()
    flight = search_flight_by_id(data["flight"])
    ticket = search_ticket_by_id(data["ticket_data"])
    pasenger = search_pasenger_by_id(data["pasenger_data"])
    plane = search_plane_by_id(flight.plane)

    if ticket is None :
        raise ValueError("Ticket_data")
    if flight is None :
        raise ValueError("flight")
    if pasenger is None or validation_passport(pasenger["day_pasaport"]) == False:
        raise ValueError("pasenger_data")
    if plane.capacity > 0:
        plane.capacity -= 1
    else:  
        raise ValueError("The plane is full")

    data_luggage = plane_data(plane, data["fare"])
    if data_luggage is None:
        raise ValueError("Fare not allowed for this plane")

    data["accumulated_miles"] = (ticket.price * 0.1) + pasenger.accumulated_miles
    pasenger.accumulated_miles = data["accumulated_miles"]

    data["ticket_data"] = ticket.id
    data["flight"] = flight.id
    data["pasenger_data"] = pasenger.id
    session.add(plane)
    session.add(pasenger)
    session.commit()
    session.close()
    return data
