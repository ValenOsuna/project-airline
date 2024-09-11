from flask import Blueprint, request
from .pasengerController import create, delete, search_pasenger_by_id, update, descomprimir

pasenger = Blueprint("pasenger", __name__)

@pasenger.route("/create", methods=["POST"])
def create_data():
    try:
        Data = request.get_json()
        create(Data)

        return "Exito"
    
    except:
        return "Error"
    
@pasenger.route("/search", methods=["POST"])
def search_data():
    Data = request.get_json().get("id")
    return descomprimir(search_pasenger_by_id(Data))

@pasenger.route("/delete", methods=["POST"])
def delete_data():
    try:
        Data = request.get_json().get("id")
        return delete(Data)
    except:
        return "Error"
    
@pasenger.route("update", methods=["POST"])
def update_data():
    data = request.get_json()
    id = request.get_json().get("id")
    return update(**data)