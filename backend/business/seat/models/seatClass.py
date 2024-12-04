from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Seat(Base):
    __tablename__ = "seats"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    seat = Column("seat", String, nullable=False)
    fare = Column("fare", String, nullable=False)
    flight = Column("flight", Integer, ForeignKey("flights.id"))

    flightRelation = relationship("Flight", back_populates="seatRelation")
    saleRelation = relationship("Sale", back_populates="seatRelation")

    def __init__(self,
                 seat=None,
                 flight=None,
                 fare=None):
        self.seat = seat
        self.flight = flight
        self.fare = fare

    def createSeat(self, data):
        self.seat = data["seat"]
        self.flight = data["flight"]
        self.fare = data["fare"]

    def dump(self):
        return vars(self)

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()

    def to_dict(self):
        return {
            "id": self.id,
            "seat": self.seat,
            "flight": self.flight,
            "fare": self.fare}
