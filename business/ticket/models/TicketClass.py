from sqlalchemy import Column, String, Integer, Float , ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Cursor


class Ticket(Base):
    __tablename__ = 'ticket'

    id = Column(Integer, primary_key=True, autoincrement=True)
    price = Column("price", Float)
    gate = Column("gate", String)
    airline = Column("airline", String)
    terminal = Column("terminal", Integer)
    seat = Column("seat", Integer)
    group = Column("group", Integer)

    flight = Column("Flights", Integer , ForeignKey("Flights.id"))
    flightDetail = relationship("Flights", back_populates= "ticketDetail" , cascade="all, delete")

    def __init__(self,
                 price=0,
                 gate="",
                 airline="",
                 terminal=0,
                 seat=0,
                 group=0
                 ):
        self.price = price
        self.gate = gate
        self.airline = airline
        self.terminal = terminal
        self.seat = seat
        self.group = group

    def ticket_create(self, response):
        self.gate = response["gate"]
        self.airline = response["airline"]
        self.terminal = response["terminal"]
        self.seat = response["seat"]
        self.price = response["price"]
        self.group = response["group"]

    def save(self):
        Cursor.add(self)
        Cursor.commit()
        Cursor.flush()
