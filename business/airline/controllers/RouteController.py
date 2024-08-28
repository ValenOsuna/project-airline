from flask import Blueprint, request
from .airlineController import create, delete, search, update, descomprimir_obj

airline = Blueprint("airlines", __name__)


@airline.route("/create", methods=['POST'])
def createAirline():
    try:
        Data = request.get_json()
        create(Data)

        return {"msg" : "datos de aerolinea cargados "}

    except:
        return {"msg": "No se encuentran datos de aerolinea "}


@airline.route("/search", methods=['POST'])
def search_aerolinea():
    Data = request.get_json().get("id")
    return descomprimir_obj(search(Data))


@airline.route("/delete", methods=['POST'])
def delete_aerolinea():
    Data = request.get_json().get("id")
    return delete(Data)


@airline.route("/update", methods=['POST'])
def update_airlines():
    data = request.get_json()
    id = request.get_json().get("id")
    return update(**data)
