from flask import Blueprint, request
from .planeControllers import create, update, search_plane_by_id, delete, decompress_obj


plane = Blueprint("plane", __name__)


@plane.route("/plane_create", methods=["POST"])
def create_plane():
    try:
        response = request.get_json()
        create(response)
        return {"msg": "The aircraft has been loaded successfully."}
    except:
        return {"msg": "The selected aircraft is not operating"}


@plane.route("/plane_update", methods=["POST"])
def query_plane():
    response = request.get_json()
    id = request.get_json().get("id")
    return update(**response)


@plane.route("/plane-search", methods=["POST"])
def search_plane():
    response = request.get_json().get("id")
    return decompress_obj(search_plane_by_id(response))


@plane.route("/plane_delete", methods=["DELETE"])
def delete_plane():
    try:
        response = request.get_json().get("id")
        return {"msg": "the plane is eliminade of the list"}
    except:
        return {"msg": "The selected aircraft has been removed from the list"}
