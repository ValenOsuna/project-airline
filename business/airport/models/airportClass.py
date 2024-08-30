from sqlalchemy import Column, String, Integer
from db import Base, Session


class Airport(Base):
    __tablename__ = 'airports'

    id = Column(Integer, primary_key=True, autoincrement=True)
    city = Column("city", String)
    country = Column("country", String)
    acronym = Column("acrony,", String)

    def __init__(self,
                 city="",
                 country="",
                 acronym=""
                 ):
        self.city = city
        self.country = country
        self.acronym = acronym

    def create(self, Data):
        self.city = Data["city"]
        self.acronym = Data["acronym"]
        self.country = Data["country"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()
