from flask import Blueprint, request
from .planeControllers import create, update, search_by_id, delete, decompress_obj


plane = Blueprint("airport", __name__)


@plane.route("/plane_create", methos=["POST"])
def plane_create():
    try:
        response = request.get_josn()
        create(response)
        return {"msg": "The aircraft has been loaded successfully."}
    except:
        return {"msg": "The selected aircraft is not operating"}


@plane.route("/plane_update", methos=["POST"])
def query_plane():
    response = request.get_json()
    id = request.get_josn().get("id")
    return update(**response)


@plane.route("/plane_search", methos=["POST"])
def search_plane():
    response = request.get_json().get(id)
    return decompress_obj(search_by_id(response))


@plane.delete("/plane_delete",methos=["DELETE"])
def delete_plane():
    try:
        response = request.get_json().get("id")
        return delete(response)
    except:
        return {"msg": "The selected aircraft has been removed from the list"}
