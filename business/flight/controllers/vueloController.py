from ..models.VueloClass import Vuelo
from db import Cursor

def createFlight(Data):
    try: 
        vuelo = Vuelo()
        vuelo.Cargar(Data)
        vuelo.save()
        return {"msg" : "Vuelo cargado exitosamente "}
    
    except:
        return {"msg": "No se ha podido cargar el vuelo ",
                "AtributosObjeto" : "destination , origin , takeoff_time , boarding_time"}

def updateFlight(**Data):

    if len(Data) == 1 and "id" in Data:
        return {"msg":f"No se han enviado datos para modificar el id: '{Data["id"]}' "}
    
    id = Data.get("id")
    vuelo = searchFlight(id)

    if type(vuelo) == dict:
         return vuelo 

    if "destination" in Data:
        vuelo.Destino = Data["destination"]

    if  "origin" in Data: 
        vuelo.Origen = Data["origin"]

    if "takeoff_time" in Data:
        vuelo.HorarioDespegue = Data["takeoff_time"]

    if "boarding_time" in Data:
        vuelo.HorarioEmbarque = Data["boarding_time"]

    vuelo.save()

    return {"msg" : "Vuelo actualizado correctamente"}
        
                 

def searchFlight(id):
    if id is None:
        return {"msg" : "Error : No se ha enviado 'id' " , 
                "keyError" : "id"}

    try:
        VueloBuscado = (Cursor.query(Vuelo).where(Vuelo.id == id))[0]
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
        return {"origin": f"{vuelo.Origen}", 
                "destination": f"{vuelo.Destino}",
                "boarding time": f"{vuelo.HorarioEmbarque}",
                "takeoff time": f"{vuelo.HorarioDespegue}"}
    else:
         return vuelo
