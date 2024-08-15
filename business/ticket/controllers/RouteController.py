from flask import Blueprint, request
from .TicketController import create_ticket, update_ticket, search_ticket, delete_ticket, decompress_obj


ticket = Blueprint("ticket", __name__)


@ticket.route("/create_ticket", methods=["POST"])
def ticket_create():
    response = request.get_json()
    create_ticket(response)
    return response


@ticket.route("/delete-ticket", methods=["DELETE"])
def delete_ticket():
    response = request.get_json().get("id")
    delete_ticket(response)
    return ("The ticket has been successfully canceled")


@ticket.route("/update-teticket", methods=["POST"]) # methods PUT O PACH
def adjust_tickets():
    kwargs = request.get_json()
    update_ticket(**kwargs)
    return ("The ticket has been modified successfully")


@ticket.route("/search-ticket", methods=["POST"])
def consult_tickets():
    response = request.get_json().get("id")
    return decompress_obj(search_ticket(response))
