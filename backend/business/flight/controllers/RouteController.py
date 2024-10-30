from .flightController import createFlight, deleteFlight, updateFlight, readFlight
from flask import Blueprint, request

flight = Blueprint("flight", __name__)


@flight.route("/create", methods=['POST'])
def create():
    data = request.get_json().get("data")
    return createFlight(data)


@flight.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readFlight(id)


@flight.route("/update", methods=['PUT', 'PATCH'])
def update():
    Data = request.get_json()
    return updateFlight(**Data)


@flight.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteFlight(id)
