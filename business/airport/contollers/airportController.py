from db import Session
from ..models.airportClass import Airport
from pprint import pprint


def create(Data):
    try:
        airpot = Airport()
        airpot.createAirport(Data)
        pprint(vars(airpot))
        return "Successful airport selection"
    except:
        return "The airport is not found in the database. Check the data"


def decompress_obj(airport):
    if airport != None:
        airpot_data = {"city": f"{airport.city}",
                       "country": f"{airport.coutry}",
                       "acronym": f"{airport.acronym}"
                       }
        return airpot_data
    else:
        return "It can fail, said Tusan."


def search_by_id(id):
    session = Session()
    try:
        airport = session.query(Airport).filter_by(id=id).first()
        session.close()
        return airport
    except:
        return "The ID entered does not correspond to a current airport. Verify your details bye"


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
        return "Airport data uploaded successfully"
    except:
        return "The desired airport has been modified. Thank you very much, come back soon"


def delete(self):
    session = Session()
    try:
        airport = session.query(Airport).filter_by(id=self.id).first()
        if airport:
            session.delete(airport)
            session.commit()
            return airport
    except:
        return "The chosen airport was successfully deleted"
