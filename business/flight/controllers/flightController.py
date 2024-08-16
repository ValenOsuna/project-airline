from ..models.flightClass import Flights
from flask import jsonify
from db import Cursor

def createFlight(Data):
    try: 
        flight = Flights()
        flight.Cargar(Data)
        flight.save()
        return jsonify({"msg" : "Vuelo cargado exitosamente "}), 201
    
    except:
        return jsonify({"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "destination , origin , departure_time , boarding_time"}), 400

def updateFlight(**Data):

    if len(Data) == 1 and "id" in Data:
        id = Data["id"]
        return jsonify({"msg": f"No se han enviado datos para modificar el id: '{id}'"}),400
    
    id = Data.get("id")
    flight = searchFlight(id)

    if type(flight) != Flights:
        return flight 

    if "destination" in Data:
        flight.destination = Data["destination"]

    if  "origin" in Data: 
        flight.origin = Data["origin"]

    if "departure_time" in Data:
        flight.departure_time = Data["departure_time"]

    if "boarding_time" in Data:
        flight.boarding_time = Data["boarding_time"]

    flight.save()

    return jsonify({"msg" : "Vuelo actualizado correctamente"}),200
        
                 

def searchFlight(id):
    if id is None:
        return jsonify({"msg" : "Error : No se ha enviado 'id' " , 
                "keyError" : "id"}), 400

    try:
        flight = (Cursor.query(Flights).where(Flights.id == id))[0]
        return flight
        
    except:
        return jsonify({"msg" : "Vuelo no encontrado" , "keyError" : "id"}),404
    

def deleteFlight(id):
    flight = searchFlight(id)
    if type(flight) != Flights:
        return flight
    
    Cursor.delete(flight)
    Cursor.commit()
    Cursor.flush()

    return jsonify({"msg" : "Vuelo borrado con exito"}),200
    
    

def readFlight(id):
    flight = searchFlight(id)
    if type(flight) != Flights:
        return flight

    return jsonify({"origin": f"{flight.origin}", 
            "destination": f"{flight.destination}",
            "boarding time": f"{flight.boarding_time}",
            "departure time": f"{flight.departure_time}"}), 200
    
         
