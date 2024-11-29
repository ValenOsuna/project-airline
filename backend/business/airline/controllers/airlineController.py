from ..models.airlineClass import Airlines
from db import Session


def create(Data):
    airline = Airlines()
    airline.create(Data)
    return airline.to_dict()


def search_airline_by_id(id):
    session = Session()
    user = session.query(Airlines).filter_by(id=id).first()
    session.close()
    return user


def search(id):
    try:
        Data = Session.query(Airlines).where(Airlines.id == id)
        return Data[0]
    except:
        print("Aerolinea no se encuentra cargado o no esta disponible, Verifique base de datos")


def update_data(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        user = session.query(Airlines).filter_by(id=id).first()
        if user:
            for key, value in kwargs.items():
                if hasattr(user, key):
                    setattr(user, key, value)
            session.commit()
            session.refresh(user)
        session.close()
        return "la base de datos de aerolineas ha sido actualizada"
    except:
        return "datos inexistentes"


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


def delete_data(id):
    session = Session()
    try:
        user = session.query(Airlines).filter_by(id=id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close()
            return user
    except:
        return "Delete"


def delete(id):
    airline = search(id)
    if airline != None:
        Session.delete(airline)
        Session.commit()
        return "borrado exitoso"
    else:
        return "datos inexistentes"


def descomprimir_obj(airlines):
    if airlines != None:
        return airlines.to_dict()
    else:
        return "Dato inexistente"


def search_airline_by_flight_id(flight_list) -> Airlines:
    session = Session()
    user = session.query(Airlines).where(flight_list == flight_list).first()
    session.close()
    return user


def search_airline_name(name):
    session = Session()
    list = session.query(Airlines).filter(Airlines.name.like(f'%{name}%'))
    results = []
    for item in list:
        results.append(item.to_dict())
        print(item.__dict__)
    return results
