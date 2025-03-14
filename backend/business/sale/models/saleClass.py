from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Float
from sqlalchemy.orm import relationship
from db import Base, Session
import uuid


class Sale(Base):
    __tablename__ = "sales"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    issue_date = Column("issue_date", String, nullable=False)
    reservation_number = Column("reservation_number", String, unique=True)
    pay_method = Column("pay_method", Boolean, nullable=False)
    accumulated_miles = Column("accumulated_miles", Integer, nullable=False)
    fare = Column("fare", String, nullable=False)
    price = Column("price", Float, nullable=False)
    seat_data = Column("seat_data", String, ForeignKey("seats.id"))
    flight = Column("flight", Integer, ForeignKey("flights.id"))
    luggage = Column("luggage", Integer, ForeignKey("luggages.id"))
    passenger_data = Column("passenger_data", Integer, ForeignKey("passengers.id"))

    flightDetail = relationship("Flight", back_populates="saleDetail")
    pasengerDetail = relationship("Passenger", back_populates="saleDetail")
    luggageDetail = relationship("Luggages", back_populates="saleDetail")
    seatRelation = relationship("Seat", back_populates="saleRelation")

    def __init__(self,
                 issue_date=None,
                 reservation_number=str(uuid.uuid4().hex[:6]).upper(),
                 passenger_data=None,
                 pay_method=None,
                 accumulated_miles=None,
                 fare=None,
                 flight=None,
                 luggage=None,
                 price=None,
                 seat_data=None
                 ):

        self.issue_date = issue_date
        self.reservation_number = reservation_number
        self.passenger_data = passenger_data
        self.pay_method = pay_method
        self.accumulated_miles = accumulated_miles
        self.fare = fare
        self.flight = flight
        self.luggage = luggage
        self.price = price
        self.seat_data = seat_data

    def createSale(self, data):
        self.issue_date = data["issue_date"]
        self.passenger_data = data["passenger_data"]
        self.pay_method = data["pay_method"]
        self.accumulated_miles = data["accumulated_miles"]
        self.fare = data["fare"]
        self.flight = data["flight"]
        self.luggage = data["luggage"]
        self.price = data["price"]
        self.seat_data = data["seat_data"]

    def to_dict(self):
        return {
            "id": self.id,
            "issue_date": self.issue_date,
            "reservation_number": self.reservation_number,
            "passenger_data": self.passenger_data,
            "pay_method": "Credito" if self.pay_method else "Debito",
            "accumulated_miles": self.accumulated_miles,
            "fare": self.fare,
            "flight": self.flight,
            "luggage": self.luggage,
            "price": self.price,
            "seat_data": self.seat_data}

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()
