from .seatController import search_seats
from flask import Blueprint, request

seat = Blueprint("seat", __name__)

@seat.route("/search", methods=['POST'])
def search():
    id = request.get_json().get("id")
    return search_seats(id)