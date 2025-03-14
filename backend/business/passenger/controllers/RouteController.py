from flask import Blueprint, request, jsonify
from .passengerController import create, delete,search_pasenger_by_passport, search_pasenger_by_id, update, validation_passport, search_list

passenger = Blueprint("passenger", __name__)


@passenger.route("/create", methods=["POST"])
def create_data():
    try:
        data = request.get_json().get("data")
        return create(data)
    except:
        return "Error"


@passenger.route("/search", methods=["POST"])
def search_data():
    response = request.get_json().get("id")
    data = (search_pasenger_by_id(response))
    if data is None:
        return {"msg": "Passanger not found"}
    return data.to_dict()

@passenger.route("/search-passport", methods=["POST"])
def search_data_passport():
    response = request.get_json().get("id")
    data = (search_pasenger_by_passport(response))
    if data is None:
        return {"msg": "Passanger not found"}
    return data.to_dict()



@passenger.route("/delete", methods=["POST"])
def delete_data():
    try:
        Data = request.get_json().get("id")
        delete(Data)
        return {"msg": "DELETE succes"}
    except:
        return "Error"


@passenger.route("/update", methods=["POST"])
def update_data():
    data = request.get_json().get("data")
    return update(**data)


@passenger.route('/validation', methods=['POST'])
def validation_pasaporte():
    data = request.json
    expiration_date_str = data.get('expiration_date')
    if not expiration_date_str:
        return jsonify({"error": "Expiration date missing"}), 400

    es_valido = validation_passport(expiration_date_str)
    return jsonify({"valido": es_valido})


@passenger.route('/list', methods=['GET'])
def result_list():
    name = request.args.get("name")
    return search_list(name)
