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
                "AtributosObjeto" : "Destino , Origen , HorarioDespegue , HorarioEmbarque"}

def updateFlight(**Data):
    id = Data["id"]
    vuelo = searchFlight(Data["id"])
    if type(vuelo) != dict:
        if "Destino" in Data:
            vuelo.Destino = Data["Destino"]
        if  "Origen" in Data: 
            vuelo.Origen = Data["Origen"]
        if "HorarioDespegue" in Data:
            vuelo.HorarioDespegue = Data["HorarioDespegue"]
        if "HorarioEmbarque" in Data:
            vuelo.HorarioEmbarque = Data["HorarioEmbarque"]
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
        return {"Origen": f"{vuelo.Origen}", 
                "Destino": f"{vuelo.Destino}",
                "Horario embarque": f"{vuelo.HorarioEmbarque}",
                "Horario despegue": f"{vuelo.HorarioDespegue}"}
    else:
         return vuelo
