from flask import Blueprint, request
from .TicketController import create, update, search_ticket_by_id, delete


ticket = Blueprint("ticket", __name__)


@ticket.route("/create", methods=["POST"])
def ticket_create():
    try:
        response = request.get_json().get("id")
        return create(response)
    except:
        raise
        return {"msg": "The ticket has irregularities, please verify the details"}


@ticket.route("/delete", methods=["DELETE"])
def ticket_delete():
    try:
        response = request.get_json().get("id")
        return delete(response)
    except:
        return {"error"}


@ticket.route("/update", methods=["POST"])  # methods PUT O PACH
def adjust_tickets():
    response = request.get_json().get("data")
    ticket = update(**response)
    return ticket


@ticket.route("/search", methods=["POST"])
def consult_tickets():
    response = request.get_json().get("id")
    ticket = search_ticket_by_id(response)
    if ticket is None:
        return {"msg": "Ticket not found"}
    return ticket.to_dict()
