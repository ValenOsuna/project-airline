from .saleController import createSale, deleteSale, updateSale, readSale , cancelFlight, search_list_sale
from flask import Blueprint, request

sale = Blueprint("sale", __name__)


@sale.route("/create", methods=['POST'])
def create():
    data = request.get_json().get("data")
    print(data)
    return createSale(data)


@sale.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readSale(id)


@sale.route("/update", methods=['PUT', 'PATCH'])
def update():
    
    Data = request.get_json().get("data")
    print(Data)
    return updateSale(**Data)


@sale.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteSale(id)


@sale.route("/cancel", methods=['POST'])
def cancel():
    id = request.get_json().get("id")
    return cancelFlight(id)

@sale.route("/list", methods=['GET'])
def listResult():
    data = request.get_json().get("data").get("issue_date")
    print(data)
    return search_list_sale(data)

