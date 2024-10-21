from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Passenger(Base):
    __tablename__ = "passengers"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    name = Column("name", String, nullable=False)
    surname = Column("surname", String, nullable=False)
    passport_number = Column("passport_number", Integer, unique=True, nullable=False)
    passport_expiration = Column("passport_expiration", String, nullable=False)
    nationality = Column("nationality", String, nullable=False)
    country_emision = Column("country_emision", String, nullable=False)
    accumulated_miles = Column("accumulated_miles", Integer, nullable=False)
    luggage = Column("luggage", Integer, ForeignKey("luggages.id"))
  
    saleDetail = relationship("Sale", back_populates="pasengerDetail", cascade="all, delete")

    def __init__(self,
                 name="",
                 surname="",
                 passport_number="",
                 passport_expiration="",
                 nationality="",
                 country_emision="",
                 accumulated_miles=0,
                 luggage=0):
        self.name = name
        self.surname = surname
        self.number_passport = passport_number
        self.passport_expiration = passport_expiration
        self.nationality = nationality
        self.country_emision = country_emision
        self.accumulated_miles = accumulated_miles
        self.luggage = luggage
       

    def create(self, data):
        self.name = data["name"]
        self.surname = data["surname"]
        self.passport_number = data["passport_number"]
        self.passport_expiration = data["passport_expiration"]
        self.nationality = data["nationality"]
        self.country_emision = data["country_emision"]
        self.accumulated_miles = data["accumulated_miles"]
        self.luggage = data["luggage"]

        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def to_dict(self):
    
        return {"passport_number": self.passport_number,
                "passport_expiration": self.passport_expiration,
                "nationality": self.nationality,
                "country_emision": self.country_emision,
                "accumulated_miles": self.accumulated_miles,
                "luggage" : self.luggage,
                "name" : self.name,
                "surname" : self.surname}
        