from ..models.flightClass import Flight
from flask import jsonify
from db import Session

def createFlight(Data):
    try: 
        flight = Flight()
        flight.Cargar(Data)
        flight.save()
        return jsonify({"msg" : "Vuelo cargado exitosamente "}), 201
    
    except:
        return jsonify({"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "destination , origin , departure_time , boarding_time"}), 400

def updateFlight(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No se han enviado datos para modificar el id: '{id}'"}),400
    
    id = kwargs.get("id")
    flight = session.query(Flight).filter_by(id=Flight.id).first()

    if not flight:
        return jsonify({"msg" : "Vuelo no encontrado" , "keyError" : "id"}), 404 

    
    for key, value in kwargs.items():
        if hasattr(flight, key):
            setattr(flight, key, value)

    session.add(flight)
    session.commit()
    session.close()

    return jsonify({"msg" : "Vuelo actualizado correctamente"}),200
        
                 
             
def search_flight_by_id(id):
        session = Session()
        user = session.query(Flight).filter_by(id=id).first()
        session.close()
        return user
    

def deleteFlight(id):
    session = Session()
    flight = session.query(Flight).filter_by(id=Flight.id).first()
    if not flight:
        return jsonify({"msg" : "Vuelo no encontrado" , "keyError" : "id"}), 404 
    
    session.delete(flight)
    session.commit()
    session.close()
    return jsonify({"msg" : "Vuelo borrado con exito"}),200


def readFlight(id):
    session = Session()
    flight = session.query(Flight).filter_by(id=Flight.id).first()
    if not flight:
        return jsonify({"msg" : "Vuelo no encontrado" , "keyError" : "id"}), 404 
    session.close()

    return jsonify({"origin": f"{flight.origin}", 
            "destination": f"{flight.destination}",
            "boarding time": f"{flight.boarding_time}",
            "departure time": f"{flight.departure_time}"}), 200

