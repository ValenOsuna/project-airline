from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from db import Base, Session


class Ticket(Base):
    __tablename__ = 'tickets'

    id = Column(Integer, primary_key=True, autoincrement=True)
    gate = Column("gate", String)
    airline = Column("airline", String)
    terminal = Column("terminal", Integer)
    seat = Column("seat", Integer)
    group = Column("group", Integer)
    visa_check = Column("visa_check",Boolean)
    number_passport = Column("number_passport", Integer)
    reservation_number = Column("reservation_number", Integer)
    

    flight = Column("flights", Integer, ForeignKey("flights.id"))
    flightDetail = relationship("Flight", back_populates="ticketDetail", cascade="all, delete")

    def __init__(self,
                 gate="",
                 airline="",
                 terminal=0,
                 seat=0,
                 group=0,
                 visa_check=None,
                 number_passport=None,
                 reservation_number=None,
                 flight = None
                 ):
        self.gate = gate
        self.airline = airline
        self.terminal = terminal
        self.seat = seat
        self.group = group
        self.visa_check = visa_check
        self.number_passport = number_passport
        self.reservation_number = reservation_number
        self.flight = flight

    def ticket_create(self, response):
        self.gate = response["gate"]
        self.airline = response["airline"]
        self.terminal = response["terminal"]
        self.seat = response["seat"]
        self.group = response["group"]
        self.visa_check = response["visa_check"]
        self.reservation_number = response["reservation_number"]
        self.number_passport = response["number_passport"]
        self.flight = response["flight"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()
