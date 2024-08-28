from db import Session
from ..models.TicketClass import Ticket
from pprint import pprint


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


def search_by_id(id):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(id=id).first()
        session.close()
        return user
    except:
        return "The ID entered does not correspond to a sold ticket. He's going to want to scam another bye, bye..."


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
        return "Update successful paper"

    except:
        return "The desired ticket was modified. Next time please don't change the destination at the last minute..."


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
        return "The ticket has been successfully canceled. Many for choosing our company and will not return again."


def create(Data):
    ticket = Ticket()
    ticket.ticket_create(Data)
    pprint(vars(ticket))
