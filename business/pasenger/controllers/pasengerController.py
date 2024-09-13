from ..models.pasengerClass import Pasenger
from pprint import pprint
from db import Session
from datetime import datetime

def create(Data):
    pasenger = Pasenger()
    pasenger.create(Data)
    pprint(vars(pasenger))

def search_pasenger_by_id(id):
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
    
def delete(id):
    session = Session()
    try:
        user = session.query(Pasenger).filter_by(id=id).first()
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
                        "country_emision": f"{Pasenger.country_emision}",
                        "accumulated_miles" : f"{Pasenger.accumulated_miles}"}
        return Pasenger_info
    else:
        return "Dato inexistente"
    
@staticmethod
def validation_passport(expiration_date_str):
    try:
        expiration_date = datetime.strptime(expiration_date_str, "%Y-%m-%d")
        current_date = datetime.now()
        return current_date <= expiration_date
    except:
        "passport not valid"