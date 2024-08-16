from ..models.flightClass import Flights
from db import Cursor

def createFlight(Data):
    try: 
        flight = Flights()
        flight.Cargar(Data)
        flight.save()
        return {"msg" : "Vuelo cargado exitosamente "}
    
    except:
        return {"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "destination , origin , departure_time , boarding_time"}

def updateFlight(**Data):

    if len(Data) == 1 and "id" in Data:
        id = Data["id"]
        return {"msg": f"No se han enviado datos para modificar el id: '{id}'"}
    
    id = Data.get("id")
    flight = searchFlight(id)

    if type(flight) == dict:
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

    return {"msg" : "Vuelo actualizado correctamente"}
        
                 

def searchFlight(id):
    if id is None:
        return {"msg" : "Error : No se ha enviado 'id' " , 
                "keyError" : "id"}

    try:
        flight = (Cursor.query(Flights).where(Flights.id == id))[0]
        return flight
        
    except:
        return {"msg" : "Vuelo no encontrado" , "keyError" : "id"}
    

def deleteFlight(id):
    flight = searchFlight(id)
    if type(flight) != dict:
        Cursor.delete(flight)
        Cursor.commit()
        Cursor.flush()

        return {"msg" : "Vuelo borrado con exito"}
    
    else: 
         return flight

def readFlight(id):
    flight = searchFlight(id)
    if type(flight) != dict:
        return {"origin": f"{flight.origin}", 
                "destination": f"{flight.destination}",
                "boarding time": f"{flight.boarding_time}",
                "departure time": f"{flight.departure_time}"}
    else:
         return flight
