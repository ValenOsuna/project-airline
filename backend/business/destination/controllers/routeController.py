from .destinationController import createDestination, deleteDesination, updateDestination, readDestination , search_list_destination
from flask import Blueprint, request

destination = Blueprint("destination", __name__)


@destination.route("/create", methods=['POST'])
def create():
    Data = request.get_json().get("data")
    Data["requiered_visa"] = bool(Data["requiered_visa"])
    print(Data)
    return createDestination(Data)


@destination.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readDestination(id)


@destination.route("/update", methods=['POST'])
def update():
    Data = request.get_json().get("data")
    return updateDestination(**Data)


@destination.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteDesination(id)


@destination.route("/list", methods=['GET'])
def listResult():
    data = request.args.get("name")
    print(data)
    return search_list_destination(data)
