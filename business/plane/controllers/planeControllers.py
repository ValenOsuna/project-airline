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
    plane_data = {"model": f"{plane.model}",
                  "capacity": f"{plane.capacity}",
                  "fare": f"{plane.fare}"
                  }
    return plane_data


def plane_data(plane, fare_type):
    if fare_type in plane.fare_types:
        fare = f"{plane.fare}"
        if fare_type == "economy":
            luggage = "personal item"
        elif fare_type == "premium":
            luggage = "carry-on"
        elif fare_type == "business":
            luggage = "checked"
        else:
            luggage = "luggage type not available"
    else:
        fare = "Fare type not available"
        luggage = "luggage type not available"
    plane_data = {"model": f"{plane.model}",
                  "capacity": f"{plane.capacity}",
                  "fare": fare,
                  "luggage": luggage
                  }
    # print(plane_data)
    return plane_data


def search_plane_by_id(id):
    session = Session()
    plane = session.query(Plane).filter_by(id=id).first()
    session.close()
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
            session.close()
    except:
        return {"msg": "Fallo"}
