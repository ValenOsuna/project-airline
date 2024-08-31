from ..models.pasengerClass import Pasenger
from pprint import pprint
from db import Session

def create(Data):
    pasenger = Pasenger()
    pasenger.create(Data)
    pprint(vars(pasenger))

@staticmethod
def search_by_id(id):
    session = Session()
    user = session.query(Pasenger).filter_by(id=id).first()
    session.close()
    return user

def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        user = session.query(Pasenger).filter_by(id=id).first()
        if user:
            for key, value in kwargs.items():
                if hasattr(user, key):
                    setattr(user, key, value)
            session.commit()
            session.refresh(user)
        session.close()
        return "base actualizada"
    except:
        return "Error"
    
def delete(self):
    session = Session()
    try:
        user = session.query(Pasenger).filter_by(id=self.id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close()
            return user
    except:
        return "Error"

def descomprimir(Pasenger):
    if Pasenger != None:
        Pasenger_info = {"number_pasaport": f"{Pasenger.number_pasaport}",
                        "day_pasaport": f"{Pasenger.day_pasaport}",
                        "nationality": f"{Pasenger.nationality}",
                        "country_emision": f"{Pasenger.country_emision}"}
        return Pasenger_info
    else:
        return "Dato inexistente"