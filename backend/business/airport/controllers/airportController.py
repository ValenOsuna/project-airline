from db import Session
from ..models.airportClass import Airport


def create(Data):
    airport = Airport()
    airport.createAirport(Data)
    print(airport)
    return airport


def decompress_obj(airport):
    print(airport)
    if airport != None:
        return airport.to_dict()
    else:
        return "datos inexistente"


def search_airport_by_id(data):
    print(data)
    session = Session()
    airport = session.query(Airport).filter_by(id=data).first()
    print(airport)
    session.close()
    return airport


def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        airport = session.query(Airport).filter_by(id=id).first()
        if airport:
            for key, value in kwargs.items():
                if hasattr(airport, key):
                    setattr(airport, key, value)
            session.commit()
            session.refresh(airport)
        session.close()
        return {"msg": "Airport data uploaded successfully"}
    except:
        return {"msg": "The desired airport has been modified. Thank you very much, come back soon"}


def delete(id):
    session = Session()
    airport = session.query(Airport).filter_by(id=id).first()
    if airport:
        session.delete(airport)
        session.commit()
        return airport


def search_airport_city(country):
    session = Session()
    list = session.query(Airport).filter(Airport.country.like(f'%{country}%'))
    print(list)
    results = []
    for item in list:
        results.append(item.to_dict())
        print(item.__dict__)
    return results
