from flask import Blueprint, request
from .TicketController import create, update, search_by_id, delete, decompress_obj


ticket = Blueprint("ticket", __name__)


@ticket.route("/create_ticket", methods=["POST"])
def ticket_create():
    try:
        response = request.get_json()
        create(response)
        return {"msg": "The ticket has been created correctly"}

    except:
        return {"The ticket has irregularities, please verify the details"}


@ticket.route("/delete_ticket", methods=["DELETE"])
def ticket_delete():
    try:
        response = request.get_json().get("id")
        return delete(response)
    except:
        return {"error"}


@ticket.route("/update_ticket", methods=["POST"]) # methods PUT O PACH
def adjust_tickets():
    response = request.get_json()
    id = request.get_json().get("id")
    return update(**response)


@ticket.route("/search_ticket", methods=["POST"])
def consult_tickets():
    response = request.get_json().get("id")
    return decompress_obj(search_by_id(response))
