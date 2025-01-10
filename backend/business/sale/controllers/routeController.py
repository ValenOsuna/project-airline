from .saleController import createSale, deleteSale, updateSale, readSale, cancelFlight, price_fare, search_list_sale, price_fare
from flask import Blueprint, request

sale = Blueprint("sale", __name__)


@sale.route("/create", methods=['POST'])
def create():
    data = request.get_json().get("data")
    return createSale(data)


@sale.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return readSale(id)


@sale.route("/update", methods=['PUT', 'PATCH'])
def update():
    Data = request.get_json().get("data")
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
    data = request.args.get("issue_date")
    return search_list_sale(data)


@sale.route("/price", methods=['POST'])
def PriceResult():
    print(request.get_json())
    Fare = request.get_json().get("wantedFare")
    flightID = request.get_json().get("flight_price")
    return price_fare(Fare, flightID)
