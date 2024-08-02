from Core import Vuelo
from db import Cursor

def CargarVuelo():
    vuelo = Vuelo()
    vuelo.Cargar()
    vuelo.save()

def UpdateVuelo():
    vuelo = QueryVuelo()
    if vuelo is not None:
        vuelo.Origen = input("Origen: ")
        vuelo.Destino = input("Destino: ")
        vuelo.HorarioDespegue = input("Horario despegue: ")
        vuelo.HorarioEmbarque = input("Horario embarque: ")
        vuelo.save()
    
    DatosVuelo(vuelo)
        

def QueryVuelo():
    
        id = int(input("\nID del vuelo: "))
        VueloBuscado = (Cursor.query(Vuelo).where(Vuelo.id == id))[0]
        
        DatosVuelo(VueloBuscado)
        
        return VueloBuscado
    

def DeleteVuelo():
    Search = QueryVuelo()
    Cursor.delete(Search)
    Cursor.commit()
    Cursor.flush()
    print("\nVuelo borrado con exito\n")

def DatosVuelo(Vuelo):
    print("\n")
    print(f"-ID: {Vuelo.id}\n-Origen: {Vuelo.Origen}\n-Destino: {Vuelo.Destino}\n-Horario despegue: {Vuelo.HorarioDespegue}\n-Horario embarque: {Vuelo.HorarioEmbarque}")
    print("\n")
        