from flask import Blueprint, request, jsonify
from .pasengerController import create, delete, search_pasenger_by_id, update, descomprimir, validation_passport

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


@pasenger.route('/validation', methods=['POST'])
def validation_pasaporte():
    data = request.json
    expiration_date_str = data.get('expiration_date')
    
    if not expiration_date_str:
        return jsonify({"error": "Expiration date missing"}), 400

    es_valido = validation_passport(expiration_date_str)
    return jsonify({"valido": es_valido})

