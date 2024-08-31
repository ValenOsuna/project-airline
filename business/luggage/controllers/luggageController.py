from ..models.luggageClass import Luggages
from pprint import pprint
from db import Session

def create(Data):
    luggages = Luggages()
    luggages.create(Data)
    pprint(vars(luggages))

@staticmethod
def search_by_id(id):
    session = Session()
    user = session.query(Luggages).filter_by(id=id).first()
    session.close()
    return user

def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        user = session.query(Luggages).filter_by(id=id).first()
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
        user = session.query(Luggages).filter_by(id=self.id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close()
            return user
    except:
        return "Error"

def descomprimir(Luggages):
    if Luggages != None:
        luggages_info = {"type": f"{Luggages.type}",
                        "weight": f"{Luggages.weight}",
                        "type_flight": f"{Luggages.type_flight}"}
        return luggages_info
    else:
        return "Dato inexistente"