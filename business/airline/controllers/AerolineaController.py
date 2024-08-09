from ..models.AeroliniaClass import Aerolinea
from pprint import pprint
from db import Cursor 

def crear_datos_aerolinea(Data):
    Aerolineas = Aerolinea()
    Aerolineas.Cargar(Data)
    Aerolineas.save()
    pprint(vars(Aerolineas))

def buscar_aerolinea(id, Data):
    try:
        response = Cursor.query(Aerolinea).where(Aerolinea.id == id)
        pprint(vars(response[0]))
        return response[0]
    except:
        print("Aerolinea no se encuentra cargado o no esta disponible, Verifique base de datos")


def Modificar_aerolinea():
    aerolineas = buscar_aerolinea(int(input("id aerolinea: ")))
    aerolinea = aerolineas
    aerolinea.nombre = str(input("nuevo nombre: "))
    aerolinea.sigla = str(input("nueva sigla: "))
    aerolinea.lista_vuelos = int(input("nueva lista de vuelos: "))
    aerolinea.save()

def borrar_aerolinea():
    aerolinea = buscar_aerolinea(int(input("id aerolinea: ")))
    Cursor.delete(aerolinea)
    Cursor.commit()