from db import Session
from ..models.TicketClass import Ticket
from pprint import pprint
from business import search_pasenger_by_id, search_destination_by_id, search_sale_by_id, search_flight_by_id

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
        return {"msg": "It can fail, said Tusan."}


def search_ticket_by_id(id):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(id=id).first()
        session.close()
        return user
    except:
        return {"msg": "The ID entered does not correspond to a current airport. I'm going to want to scam another bye, bye"}


def update(**kwargs):
    session = Session()
    try:
        id = kwargs["id"]
        user = session.query(Ticket).filter_by(id=id).first()
        if user:
            for key, value, in kwargs.items():
                if hasattr(user, key):
                    setattr(user, key, value)
            session.commit()
            session.refresh(user)
        session.close()
        return {"msg": "Update successful paper"}

    except:
        return {"msg": "The desired ticket was modified. Next time please don't change the destination at the last minute..."}


def delete(self):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(id=self.id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close
            return user
    except:
        return {"msg": "The ticket has been successfully canceled. Many for choosing our company and will not return again."}


def create(data):
    ticket = Ticket()
    ticket.ticket_create(data)
    check_visa(data)
    data = data_update(data)
    pprint(vars(ticket))

def check_visa(data):
    sale = search_sale_by_id(data["sale"])
    pasenger = search_pasenger_by_id(sale.pasenger_data)
    flight = search_flight_by_id(sale.flight)
    destination = search_destination_by_id(flight.destination)
    if pasenger == None:
        raise ValueError("pasenger")
    if destination == None:
        raise ValueError("destination")
    if destination.requiered_visa == True:
        if pasenger.visa == True:
            return True
        else:
            return False
    else:
        True

def data_update(data):
    sale = search_sale_by_id(data["sale"])
    if sale == None:
        raise ValueError("sale")
    pasenger = search_pasenger_by_id(sale.pasenger_data)
    data["passport_data"] = pasenger.number_passport
    data["reservation_number"] = sale.reservation_number
    return data
