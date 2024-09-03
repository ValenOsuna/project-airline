from db import Session
from ..models.planeClass import Plane
from pprint import pprint


def create(Data):
    try:
        plane = Plane()
        plane.createPlane(Data)
        pprint(vars(plane))
        return {"msg": "Successful airport selection"}
    except:
        return {"msg": "The plane is not in operation"}


def decompress_obj(plane):
    if plane != None:
        plane_data = {"model": f"{plane.model}",
                       "ability": f"{plane.ability}"
                       }
        return plane_data
    else:
        return "It can fail, said Tusan."


def search_by_id(id):
    session = Session()
    try:
        plane = session.query(Plane).filter_by(id=id).first()
        session.close()
        return plane
    except:
        return {"msg": "The id entered is not found, please verify"}


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



def delete(self):
    session = Session()
    try:
        plane = session.query(Plane).filter_by(id=self.id).first()
        if plane:
            session.delete(plane)
            session.commit()
            return plane
    except:
        return{"msg": "The selected aircraft was successfully eliminated"}
