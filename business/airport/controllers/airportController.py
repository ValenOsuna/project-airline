from db import Session
from ..models.airportClass import Airport
from pprint import pprint


def create(Data):
    airpot = Airport()
    airpot.createAirport(Data)
    pprint(vars(airpot))
    return {"msg": "Successful airport selection"}


def decompress_obj(airport):
    airpot_data = {"city": f"{airport.city}",
                   "country": f"{airport.country}",
                   "acronym": f"{airport.acronym}"
                   }
    return airpot_data


def search_airport_by_id(id):
    session = Session()
    airport = session.query(Airport).filter_by(id=id).first()
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
