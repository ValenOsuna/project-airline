from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from db import Base, Session


class Seat(Base):
    __tablename__ = "seats"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    seat = Column("seat", String, nullable=False)
    flight = Column("flight", Integer, ForeignKey("flights.id"))

    flightRelation = relationship("Flight", back_populates="seatRelation")
    saleRelation = relationship("Sale", back_populates="seatRelation")

    def __init__(self,
                 seat=None,
                 flight=None):
        self.seat = seat
        self.flight = flight

    def createSeat(self, data):
        self.seat = data["seat"]
        self.flight = data["flight"]

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
