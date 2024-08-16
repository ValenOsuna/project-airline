from ..models.AeroliniaClass import Airlines
from pprint import pprint
from db import Cursor 

def create(Data):
    Aerolineas = Airlines()
    Aerolineas.Cargar(Data)
    Aerolineas.save()
    pprint(vars(Aerolineas))

def search(id):
    try:
        Data = Cursor.query(Airlines).where(Airlines.id == id)
        pprint(vars(Data[0]))
        return Data[0]
    except:
        print("Aerolinea no se encuentra cargado o no esta disponible, Verifique base de datos")


def update(**data):
    id = data["id"]
    aerolinea = search(data["id"])
    if type(aerolinea) != dict:
        if "name" in data:
            aerolinea.name = data["name"]
        if "acroym" in data:    
            aerolinea.acroym = data["acroym"]
        if "flight_list" in data:
            aerolinea.flight_list = data["flight_list"]
        aerolinea.save()
        return "la base de datos de aerolineas ha sido actualizada"
    else:
        return "datos inexistentes"

def delete(id):
    aerolinea = search(id)
    if aerolinea !=None:
        Cursor.delete(aerolinea)
        Cursor.commit()
        return "borrado exitoso"
    else:
        return "datos inexistentes"

def descomprimir_obj(Airlines):
    if Airlines !=None:
        Empresa = {"name": f"{Airlines.name}",
        "sigla": f"{Airlines.acroym}",
        "lista vuelos":f"{Airlines.flight_list}"}
        return Empresa
    else:
        return "Dato inexistente"
