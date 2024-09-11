from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from db import Base, Session


class Airport(Base):
    __tablename__ = 'airports'

    id = Column(Integer, primary_key=True, autoincrement=True)
    city = Column("city", String, nullable=False)
    country = Column("country", String, nullable=False)
    acronym = Column("acronym", String, nullable=False)

    destinationDetail = relationship("Destination", back_populates="airportDetail")

    def __init__(self,
                 city="",
                 country="",
                 acronym=""
                 ):
        self.city = city
        self.country = country
        self.acronym = acronym

    def createAirport(self, Data):
        self.city = Data["city"]
        self.acronym = Data["acronym"]
        self.country = Data["country"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
