from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Airlines(Base):
    __tablename__ = "airlines"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    name = Column("name", String, nullable=False)
    acronym = Column("acronym", String, nullable=False)
    flight_list = Column("flight_list", Integer, ForeignKey("flights.id"))

    flightDetail = relationship("Flight", back_populates="airlineDetail", cascade="all, delete")

    def __init__(self, name="", acronym="", flight_list=""):
        self.name = name
        self.acronym = acronym
        self.flight_list = flight_list

    def create(self, Data):
        self.name = Data["name"]
        self.acronym = Data["acronym"]
        self.flight_list = Data["flight_list"]
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "acronym": self.acronym,
            "flight_list": self.flight_list}
