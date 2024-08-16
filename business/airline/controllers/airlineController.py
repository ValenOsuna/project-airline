from ..models.airlineClass import Airlines
from pprint import pprint
from db import Cursor 

def create(Data):
    airline = Airlines()
    airline.Cargar(Data)
    airline.save()
    pprint(vars(airline))

def search(id):
    try:
        Data = Cursor.query(Airlines).where(Airlines.id == id)
        pprint(vars(Data[0]))
        return Data[0]
    except:
        print("Aerolinea no se encuentra cargado o no esta disponible, Verifique base de datos")


def update(**data):
    id = data["id"]
    airline = search(data["id"])
    if type(airline) != dict:
        if "name" in data:
            airline.name = data["name"]
        if "acronym" in data:    
            airline.acronym = data["acronym"]
        if "flight_list" in data:
            airline.flight_list = data["flight_list"]
        airline.save()
        return "la base de datos de aerolineas ha sido actualizada"
    else:
        return "datos inexistentes"

def delete(id):
    airline = search(id)
    if airline !=None:
        Cursor.delete(airline)
        Cursor.commit()
        return "borrado exitoso"
    else:
        return "datos inexistentes"

def descomprimir_obj(Airlines):
    if Airlines !=None:
        airline_data = {"name": f"{Airlines.name}",
                        "acronym": f"{Airlines.acronym}",
                        "flight List":f"{Airlines.flight_list}"}
        return airline_data
    else:
        return "Dato inexistente"
