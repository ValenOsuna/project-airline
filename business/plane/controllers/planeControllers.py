from db import Session
from ..models.planeClass import Plane
from pprint import pprint


def create(Data):
    try:
        plane = Plane()
        plane.createPlane(Data)
        pprint(vars(plane))
        return "vamoo lo lograste"
    except:
        return "no se pudo"


def decompress_obj(plane):
    pprint(plane)
    plane_data = {"model": f"{plane.model}",
                  "ability": f"{plane.ability}"
                  }
    return plane_data


def search_by_id(id):
    session = Session()
    plane = session.query(Plane).filter_by(id=id).first()
    session.close()
    pprint(vars(plane))
    return plane


def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        plane = session.query(Plane).filter_by(id=id).first()
        if plane:
            for key, value in kwargs.items():
                if hasattr(plane, key):
                    setattr(plane, key, value)
            session.commit()
            session.refresh(plane)
        session.close()
        return {"msg": "The aircraft has been successfully modified"}
    except:
        return {"msg": "The desired aircraft has been modified. Thank you very much, please come back soon"}


def delete(id):
    session = Session()
    try:
        plane = session.query(Plane).filter_by(id=id).first()
        if plane:
            session.delete(plane)
            session.commit()
            return plane
    except:
        return {"msg": "Fallo"}
