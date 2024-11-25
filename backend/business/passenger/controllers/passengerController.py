from ..models.passengerClass import Passenger
from pprint import pprint
from db import Session
from datetime import datetime


def create(Data):
    passenger = Passenger()
    passenger.create(Data)
    return passenger.to_dict()


def search_pasenger_by_id(id):
    session = Session()
    user = session.query(Passenger).filter_by(id=id).first()
    session.close()
    return user


def update(**kwargs):
    print(kwargs)
    session = Session()
    # try:
    id = kwargs["id"]
    user = session.query(Passenger).filter_by(id=id).first()
    if user:
        for key, value in kwargs.items():
            if hasattr(user, key):
                setattr(user, key, value)
        session.commit()
        session.refresh(user)
    session.close()
    return "base actualizada"
# except:
    return "Error"


def delete(id):
    session = Session()
    try:
        user = session.query(Passenger).filter_by(id=id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close()
            return {"msg" : "Delete Succes"}
    except:
        return "Error"


def validation_passport(expiration_date_str):
    try:
        expiration_date = datetime.strptime(expiration_date_str, "%Y-%m-%d")
        current_date = datetime.now()
        return current_date <= expiration_date
    except:
        "passport not valid"


def search_pasenger_by_passport(passport_number):
    session = Session()
    try:
        user = session.query(Passenger).filter_by(passport_number=passport_number).first()
        session.close()
        return user
    except:
        return {"Error"}


def search_list(name):
    session = Session()
    list = session.query(Passenger).filter(Passenger.name.like(f'%{name}%'))
    results = []
    for item in list:
        results.append(item.to_dict())
        print(item.__dict__)
    return results
