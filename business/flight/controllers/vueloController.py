from ..models.VueloClass import Flight
from db import Cursor

def createFlight(Data):
    try: 
        vuelo = Flight()
        vuelo.Cargar(Data)
        vuelo.save()
        return {"msg" : "Vuelo cargado exitosamente "}
    
    except:
        return {"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "destination , origin , takeoff_time , boarding_time"}

def updateFlight(**Data):

    if len(Data) == 1 and "id" in Data:
        id = Data["id"]
        return {"msg": f"No se han enviado datos para modificar el id: '{id}'"}
    
    id = Data.get("id")
    vuelo = searchFlight(id)

    if type(vuelo) == dict:
         return vuelo 

    if "destination" in Data:
        vuelo.destination = Data["destination"]

    if  "origin" in Data: 
        vuelo.origin = Data["origin"]

    if "takeoff_time" in Data:
        vuelo.takeoff_time = Data["takeoff_time"]

    if "boarding_time" in Data:
        vuelo.boarding_time = Data["boarding_time"]

    vuelo.save()

    return {"msg" : "Vuelo actualizado correctamente"}
        
                 

def searchFlight(id):
    if id is None:
        return {"msg" : "Error : No se ha enviado 'id' " , 
                "keyError" : "id"}

    try:
        VueloBuscado = (Cursor.query(Flight).where(Flight.id == id))[0]
        return VueloBuscado
        
    except:
        return {"msg" : "Vuelo no encontrado" , "keyError" : "id"}
    

def deleteFlight(id):
    vuelo = searchFlight(id)
    if type(vuelo) != dict:
        Cursor.delete(vuelo)
        Cursor.commit()
        Cursor.flush()

        return {"msg" : "Vuelo borrado con exito"}
    
    else: 
         return vuelo

def readFlight(id):
    vuelo = searchFlight(id)
    if type(vuelo) != dict:
        return {"origin": f"{vuelo.origin}", 
                "destination": f"{vuelo.destination}",
                "boarding time": f"{vuelo.boarding_time}",
                "takeoff time": f"{vuelo.takeoff_time}"}
    else:
         return vuelo
