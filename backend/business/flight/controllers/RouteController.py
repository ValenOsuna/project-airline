from .flightController import createFlight, deleteFlight, updateFlight, readFlight, search_flight_date, list_fligth_origin,search_flight_by_id
from flask import Blueprint, request
import ast
from db import Session

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
    Data = request.get_json().get("data")
    print(Data)
    return updateFlight(**Data)


@flight.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteFlight(id)


@flight.route('/list', methods=['GET'])
def result_list():
    data = request.args.get("date")
    return search_flight_date(data)

@flight.route('/list-origin', methods=['GET'])
def list():
    origin = request.args.get("origin")
    destination = request.args.get("destination")
    return list_fligth_origin(origin, destination)

@flight.route('/fare', methods=['GET'])
def fare():
    session = Session()
    id = request.args.get("id")
    flight = search_flight_by_id(id)
    session.add(flight)
    fareList = ast.literal_eval(flight.airplaneDetail.fare)
    session.close()
    return fareList
