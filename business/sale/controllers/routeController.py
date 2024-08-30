from .saleController import createSale, deleteSale, updateSale, readSale
from flask import Blueprint, request

sale = Blueprint("sale", __name__)


@sale.route("/create", methods=['POST'])
def create():
    Data = request.get_json()
    return createSale(Data)


@sale.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readSale(id)


@sale.route("/update", methods=['PUT', 'PATCH'])
def update():
    Data = request.get_json()
    return updateSale(**Data)


@sale.route("/delete", methods=['DELETE'])
def delete():
    id = request.get_json().get("id")
    return deleteSale(id)
