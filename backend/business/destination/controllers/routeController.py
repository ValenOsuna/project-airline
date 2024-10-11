from .destinationController import createDestination, deleteDesination, updateDestination, readDestination
from flask import Blueprint, request

destination = Blueprint("destination", __name__)


@destination.route("/create", methods=['POST'])
def create():
    Data = request.get_json()
    return createDestination(Data)


@destination.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readDestination(id)


@destination.route("/update", methods=['PUT', 'PATCH'])
def update():
    Data = request.get_json()
    return updateDestination(**Data)


@destination.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteDesination(id)
