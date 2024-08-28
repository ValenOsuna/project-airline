from db import Session
from ..models.TicketClass import Ticket
from pprint import pprint


def search_ticket(id):
    boleto = Session.query(Ticket).where(Ticket.id == id)
    if boleto != None:
            pprint(vars(boleto[0]))
            return boleto[0]
    else:
        return "The ticket was not found paper"


def decompress_obj(Ticket):
    if Ticket != None:
        fac = {"price": f"{Ticket.price}",
               "gate": f"{Ticket.gate}",
               "airline": f"{Ticket.airline}",
               "terminal": f"{Ticket.terminal}",
               "seat": f"{Ticket.seat}",
               "group": f"{Ticket.group}"}
        return fac
    else:
        return "It can fail, said Tusan."


def create_ticket(response):
    ticket = Ticket()
    ticket.ticket_create(response)
    ticket.save()
    pprint(vars(ticket))


def update_ticket(**kwargs):
    ticket = search_ticket(kwargs["id"])
    if ticket != dict:
        if "gate" in kwargs:
            ticket.gate = kwargs["gate"]
        if "airline" in kwargs:
            ticket.airline = kwargs["airline"]
        if "terminal" in kwargs:
            ticket.terminal = kwargs["terminal"]
        if "seat" in kwargs:
            ticket.seat = kwargs["seat"]
        if "price" in kwargs:
            ticket.price = kwargs["price"]
        if "group" in kwargs:
            ticket.group = kwargs["group"]
        ticket.save()
    else:
        return "Ticket you want to update is not found..."


def delete_ticket(id):
    ticket = search_ticket(id)
    if ticket != None:
        Session.delete(ticket)
        Session.commit()
    else:
        return "The ticket you want to delete cannot be found"
