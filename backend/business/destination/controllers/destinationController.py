from ..models.destinationClass import Destination
from flask import jsonify
from db import Session


def createDestination(data):
    try:
        destination = Destination()
        destination.createDestination(data)
        destination.save()
        return destination

    except:
        return jsonify({"msg": "destination could not be loaded",
                        "DestinationAttributes": {"name": "--",
                                                  "requiered_visa": "--",
                                                  "airports": "--"}}), 400


def updateDestination(**kwargs):
    session = Session()

    if len(kwargs) == 1 and "id" in kwargs:
        id = kwargs["id"]
        return jsonify({"msg": f"No data has been sent to modify the id: '{id}'"}), 400

    id = kwargs.get("id")
    destination = search_destination_by_id(id)

    if not destination:
        return jsonify({"msg": "Destination not found", "keyError": "id"}), 404

    for key, value in kwargs.items():
        if hasattr(destination, key):
            setattr(destination, key, value)

    session.add(destination)
    session.commit()
    session.close()

    return jsonify({"msg": "Destination updated successfully"}), 200


def deleteDesination(id):
    session = Session()
    destination = search_destination_by_id(id)
    if not destination:
        return jsonify({"msg": "Destination not found", "keyError": "id"}), 404
    session.delete(destination)
    session.commit()
    session.close()
    return jsonify({"msg": "Destination deleted successfully"}), 200


def readDestination(id):
    session = Session()
    destination = search_destination_by_id(id)
    if not destination:
        return jsonify({"msg": "Destination not found", "keyError": "id"}), 404
    session.close()

    return jsonify({"name": f"{destination.name}",
                    "requiered_visa": f"{destination.requiered_visa}",
                    "airports": f"{destination.airport}"}), 200


def search_destination_by_id(id) -> Destination:
        session = Session()
        destination = session.query(Destination).filter_by(id=id).first()
        session.close()
        return destination
