from flask import Blueprint, request
from .airplaneControllers import create, update, search_airplane_by_id, delete, decompress_obj


airplane = Blueprint("airplane", __name__)


@airplane.route("/airplane_create", methods=["POST"])
def create_airplane():
    try:
        response = request.get_json()
        return create(response)
    except:
        return {"msg": "The selected aircraft is not operating"}


@airplane.route("/airplane_update", methods=["POST"])
def query_airplane():
    response = request.get_json()
    id = request.get_json().get("id")
    return update(**response)


@airplane.route("/airplane-search", methods=["POST"])
def search_airplane():
    response = request.get_json().get("id")
    return decompress_obj(search_airplane_by_id(response))


@airplane.route("/airplane_delete", methods=["DELETE"])
def delete_airplane():
    try:
        response = request.get_json().get("id")
        delete(response)
        return {"msg": "the airplane is eliminade of the list"}
    except:
        return {"msg": "The selected aircraft has been removed from the list"}
