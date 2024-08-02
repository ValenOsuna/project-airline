from Core import Vuelo
from db import Cursor

def CargarVuelo(Data):
    vuelo = Vuelo()
    vuelo.Cargar(Data)
    vuelo.save()

def UpdateVuelo(id , Data):
    vuelo = QueryVuelo(id)
    if type(vuelo) != dict:
        vuelo.Destino = Data["Destino"]
        vuelo.Origen = Data["Origen"]
        vuelo.HorarioDespegue = Data["HorarioDespegue"]
        vuelo.HorarioEmbarque = Data["HorarioEmbarque"]
        vuelo.save()
        return {"msg" : "Vuelo actualizado correctamente"}

    else: 
         return vuelo      

def QueryVuelo(id):
    try:
        VueloBuscado = (Cursor.query(Vuelo).where(Vuelo.id == id))[0]
        return VueloBuscado
        
    except:
        return {"msg" : "Vuelo no encontrado"}
    

def DeleteVuelo(id):
    vuelo = QueryVuelo(id)
    if type(vuelo) != dict:
        Cursor.delete(vuelo)
        Cursor.commit()
        Cursor.flush()

        return {"msg" : "Vuelo borrado con exito"}
    
    else: 
         return vuelo

def MostrarVuelo(vuelo):
     if type(vuelo) != dict:
        return {"Origen": f"{vuelo.Origen}", 
                "Destino": f"{vuelo.Destino}",
                "Horario embarque": f"{vuelo.HorarioEmbarque}",
                "Horario despegue": f"{vuelo.HorarioDespegue}"}
     else:
         return vuelo
