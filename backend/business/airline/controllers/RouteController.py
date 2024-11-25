from flask import Blueprint, request
from .airlineController import create, delete_data, search_airline_by_id, update_data, descomprimir_obj, search_airline_name

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
    #try:
    
        Data = request.get_json().get("id")
        print(Data)
        return delete_data(Data)
    #except:
        {"Error"}


@airline.route("/update", methods=['POST'])
def update_airlines():
        data = request.get_json().get("data")
        print(data)
        return update_data(**data)

@airline.route('/list', methods=['GET'])
def result_list():
    name = request.args.get("name")
    print(name)
    return search_airline_name(name)