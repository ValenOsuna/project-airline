from flask import Blueprint, request
from .airlineController import create, delete_data, search_airline_by_id, update_data, descomprimir_obj

airline = Blueprint("airlines", __name__)


@airline.route("/create", methods=['POST'])
def createAirline():
    try:
        data = request.get_json().get("data")
        print(data)
        return create(data)

    except:
        return {"msg": "No se encuentran datos de aerolinea "}


@airline.route("/search", methods=['POST'])
def search_aerolinea():
        Data = request.get_json().get("id")
        return descomprimir_obj(search_airline_by_id(Data))


@airline.route("/delete", methods=['POST'])
def delete_aerolinea():
    try:
        Data = request.get_json().get("id")
        return delete_data(Data)
    except:
        {"Error"}


@airline.route("/update", methods=['POST'])
def update_airlines():
        data = request.get_json()
        id = request.get_json().get("id")
        return update_data(**data)