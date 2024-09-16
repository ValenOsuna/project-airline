from flask import Blueprint, request
from .airportController import create, update, search_airport_by_id, delete, decompress_obj


airport = Blueprint("airport", __name__)


@airport.route("/airport-create", methods=["POST"])
def airportCreate():
    try:
        response = request.get_json()
        create(response)
        return {"msg": "The airport has been loaded correctly"}
    except:
        return {"msg": "The chosen airport is not operational..."}


@airport.route("/airport-update", methods=["POST"])
def query_airport():
    response = request.get_json()
    id = request.get_json().get("id")
    return update(**response)


@airport.route("/airport-search", methods=["POST"])
def search_airport():
    response = request.get_json().get("id")
    return decompress_obj(search_airport_by_id(response))


@airport.route("/airport_delete", methods=["DELETE"])
def del_aiport():
    try:
        response = request.get_json().get("id")
        return delete(response)
    except:
        return {"msg": "The selected aircraft is not in the operations list"}
