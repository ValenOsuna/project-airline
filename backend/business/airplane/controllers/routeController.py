from flask import Blueprint, request
from .airplaneControllers import create, update, search_airplane_by_id, delete, decompress_obj, search_airplane_model


airplane = Blueprint("airplane", __name__)


@airplane.route("/create", methods=["POST"])
def create_airplane():
    try:
        response = request.get_json()
        return create(response)
    except:
        return {"msg": "The selected aircraft is not operating"}


@airplane.route("/update", methods=["POST"])
def query_airplane():
    response = request.get_json().get("data")
    print(response)
    return update(**response)


@airplane.route("/search", methods=["POST"])
def search_airplane():
    print(request.get_json())
    response = request.get_json().get("id")
    print(response)

    return decompress_obj(search_airplane_by_id(response))


@airplane.route("/delete", methods=["DELETE" , "POST"])
def delete_airplane():
    try:
        response = request.get_json().get("id")
        delete(response)
        return {"msg": "DELETE succes"}
    except:
        return {"msg": "The selected aircraft has been removed from the list"}
    
@airplane.route('/list', methods=['GET'])
def result_list():
    model = request.get_json().get("model")
    return search_airplane_model(model)
