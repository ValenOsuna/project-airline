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
                "AtributosObjeto" : "destination , origin , departure_time , boarding_time"}

def updateFlight(**Data):
    id = Data["id"]
    vuelo = searchFlight(Data["id"])
    if type(vuelo) != dict:

        if "destination" in Data:
            vuelo.Destino = Data["destination"]

        if  "origin" in Data: 
            vuelo.Origen = Data["origin"]

        if "departure_time" in Data:
            vuelo.HorarioDespegue = Data["departure_time"]

        if "boarding_time" in Data:
            vuelo.HorarioEmbarque = Data["boarding_time"]

        vuelo.save()

        return {"msg" : "Vuelo actualizado correctamente"}
    else: 
         return vuelo      

def searchFlight(id):
    try:
        VueloBuscado = (Cursor.query(Vuelo).where(Vuelo.id == id))[0]
        return VueloBuscado
        
    except:
        return {"msg" : "Vuelo no encontrado"}
    

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
                "departure time": f"{vuelo.HorarioEmbarque}",
                "boarding time": f"{vuelo.HorarioDespegue}"}
    else:
         return vuelo
