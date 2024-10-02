from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Ticket(Base):
    __tablename__ = 'tickets'

    id = Column(Integer, primary_key=True, autoincrement=True)
    gate = Column("gate", String, nullable=False)
    airline = Column("airline", String, nullable=False)
    terminal = Column("terminal", Integer, nullable=False)
    seat = Column("seat", Integer, nullable=False)
    group = Column("group", Integer, nullable=False)
    flight = Column("flights", Integer, ForeignKey("flights.id"))

    flightDetail = relationship("Flight", back_populates="ticketDetail")

    def __init__(self,
                 gate="",
                 airline="",
                 terminal=0,
                 seat=0,
                 group=0,
                 flight=0
                 ):
        self.gate = gate
        self.airline = airline
        self.terminal = terminal
        self.seat = seat
        self.group = group
        self.flight = flight

    def ticket_create(self, response):
        self.gate = response["gate"]
        self.airline = response["airline"]
        self.terminal = response["terminal"]
        self.seat = response["seat"]
        self.group = response["group"]
        self.flight = response["flight"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()
