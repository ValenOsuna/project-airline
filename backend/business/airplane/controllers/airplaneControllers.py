from db import Session
from ..models.airplaneClass import Airplane


def create(Data):
    airplane = Airplane()
    airplane.createAirplane(Data)
    return airplane.to_dict()


def decompress_obj(airplane):
    if airplane:
        return airplane.to_dict()
    else:
        return {"msg": "Error , unable no descompress None (airplane)"}


def checkAirplaneLuggageFare(airplane, fare_type, luggageType):
    if fare_type in airplane.fare:
        if fare_type == "FC":  # Primera
            luggage = ["pi", "c", "ch"]
        elif fare_type == "BC":  # Ejecutivo
            luggage = ["c", "ch", "pi"]
        elif fare_type == "PC":  # Premiun
            luggage = "ch"
        elif fare_type == "EC":  # Economy
            luggage = "pi"
    else:
        return None
    if luggageType in luggage:
        return luggage
    else:
        return None


def search_airplane_by_id(id):
    session = Session()
    airplane = session.query(Airplane).filter_by(id=id).first()
    session.close()
    return airplane


def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        airplane = session.query(Airplane).filter_by(id=id).first()
        if airplane:
            for key, value in kwargs.items():
                if hasattr(airplane, key):
                    setattr(airplane, key, value)
            session.commit()
            session.refresh(airplane)
        session.close()
        return {"msg": "The aircraft has been successfully modified"}
    except:
        return {"msg": "The desired aircraft has been modified. Thank you very much, please come back soon"}


def delete(id):
    session = Session()
    airplane = session.query(Airplane).filter_by(id=id).first()
    if airplane:
        session.delete(airplane)
        session.commit()
    session.close()


def search_airplane_model(model):
    session = Session()
    list = session.query(Airplane).filter(Airplane.model.like(f'%{model}%'))
    results = []
    for item in list:
        results.append(item.to_dict())
        print(item.__dict__)
    return results
