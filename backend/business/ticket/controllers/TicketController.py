from db import Session
from ..models.TicketClass import Ticket
from .HelperController import data_update


def search_ticket_by_id(data):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(id=data).first()
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
        return user.to_dict()

    except:
        return {"msg": "The desired ticket was modified. Next time please don't change the destination at the last minute..."}


def delete(self):
    session = Session()
    try:
        user = session.query(Ticket).filter_by(id=self.id).first()
        if user:
            session.delete(user)
            session.commit()
            session.close()
            return user
    except:
        return {"msg": "The ticket has been successfully canceled. Many for choosing our company and will not return again."}


def create(data):
    ticketList = []
    data = data_update(data)

    for individualSeat in data["seat"]:
        ticket = Ticket()
        print(individualSeat)
        data["seat"] = individualSeat
        ticket.ticket_create(data)
        ticketList.append(ticket.to_dict())

    return ticketList
    
        
