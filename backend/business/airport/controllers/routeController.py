from flask import Blueprint, request
from .airportController import create, update, search_airport_by_id, delete, decompress_obj


airport = Blueprint("airport", __name__)


@airport.route("/create", methods=["POST"])
def airportCreate():
    #try:
        data = request.get_json().get("data")
        print(data)
        return create(data)
    
    #except:
        return {"msg": "The chosen airport is not operational..."}


@airport.route("/update", methods=["POST"])
def query_airport():
    data = request.get_json().get("data")
    return update(**data)


@airport.route("/search", methods=["POST"])
def search_airport():
    try: 
        response = request.get_json().get("id")
        return decompress_obj(search_airport_by_id(response))
    
    except:
        raise


@airport.route("/delete", methods=["DELETE"])
def del_aiport():
    try:
        response = request.get_json().get("id")
        return delete(response)
    
    except:
        return {"msg": "The selected aircraft is not in the operations list"}
