from ..models.AeroliniaClass import Aerolinea
from pprint import pprint
from db import Cursor 

def crear_datos_aerolinea(Data):
    Aerolineas = Aerolinea()
    Aerolineas.Cargar(Data)
    Aerolineas.save()
    pprint(vars(Aerolineas))

def buscar_aerolinea(id):
    try:
        Data = Cursor.query(Aerolinea).where(Aerolinea.id == id)
        pprint(vars(Data[0]))
        return Data[0]
    except:
        print("Aerolinea no se encuentra cargado o no esta disponible, Verifique base de datos")


def Modificar_aerolinea(**data):
    id = data["id"]
    aerolinea = buscar_aerolinea(data["id"])
    if type(aerolinea) != dict:
        if "nombre" in data:
            aerolinea.nombre = data["nombre"]
        if "sigla" in data:    
            aerolinea.sigla = data["sigla"]
        if "lista_vuelos" in data:
            aerolinea.lista_vuelos = data["lista_vuelos"]
        aerolinea.save()
        return "la base de datos de aerolineas ha sido actualizada"
    else:
        return "datos inexistentes"

def borrar_aerolinea(id):
    aerolinea = buscar_aerolinea(id)
    if aerolinea !=None:
        Cursor.delete(aerolinea)
        Cursor.commit()
        return "borrado exitoso"
    else:
        return "datos inexistentes"

def descomprimir_obj(Aerolinea):
    if Aerolinea !=None:
        Empresa = {"nombre": f"{Aerolinea.nombre}",
        "sigla": f"{Aerolinea.sigla}",
        "lista vuelos":f"{Aerolinea.lista_vuelos}"}
        return Empresa
    else:
        return "Dato inexistente"
