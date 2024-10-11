from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Pasenger(Base):
    __tablename__ = "pasengers"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    number_passport = Column("number_pasaport", Integer, unique=True, nullable=False)
    day_pasaport = Column("day_pasaport", String, nullable=False)
    nationality = Column("nationality", String, nullable=False)
    country_emision = Column("country_emision", String, nullable=False)
    accumulated_miles = Column("accumulated_miles", Integer, nullable=False)
    luggage = Column("luggage", Integer, ForeignKey("luggages.id"))
    visa = Column("visa", Integer, nullable=False)

    saleDetail = relationship("Sale", back_populates="pasengerDetail", cascade="all, delete")

    def __init__(self, number_pasaport="", day_pasaport="", nationality="", country_emision="", accumulated_miles=0, visa=None):
        self.number_passport = number_pasaport
        self.day_pasaport = day_pasaport
        self.nationality = nationality
        self.country_emision = country_emision
        self.accumulated_miles = accumulated_miles
        self.visa = visa

    def create(self, Data):
        self.number_passport = Data["number_pasaport"]
        self.day_pasaport = Data["day_pasaport"]
        self.nationality = Data["nationality"]
        self.country_emision = Data["country_emision"]
        self.accumulated_miles = Data["accumulated_miles"]
        self.visa = Data["visa"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def to_dict(self):
    
        return {"number_pasaport": self.number_passport,
                "day_pasaport": self.day_pasaport,
                "nationality": self.nationality,
                "country_emision": self.country_emision,
                "accumulated_miles": self.accumulated_miles}
        