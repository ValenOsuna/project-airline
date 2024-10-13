from flask import Blueprint, request
from .luggageController import create,delete,search_luggage_by_id,update,descomprimir

luggage = Blueprint("luggages", __name__)

@luggage.route("/create", methods=["POST"])
def create_data():
 #   try:
        Data = request.get_json()
        create(Data)

        return "Exito"
    
   # except:
        return "Error"
    

@luggage.route("/search", methods=["POST"])
def search_data():
    Data = request.get_json().get("id")
    return descomprimir(search_luggage_by_id(Data))

@luggage.route("/delete", methods=["POST"])
def delete_data():
    try:
        Data = request.get_json().get("id")
        return delete(Data)
    except:
        return "Error"
    
@luggage.route("update", methods=["POST"])
def update_data():
    data = request.get_json()
    id = request.get_json().get("id")
    return update(**data)