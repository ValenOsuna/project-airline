from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from db import Base, Session


class Destination(Base):
    __tablename__ = "destinations"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    name = Column("name", String, nullable=False)
    requiered_visa = Column("requiered_visa", Boolean)
    airport = Column("airport", Integer, ForeignKey("airports.id"))

    flightDetail = relationship("Flight", back_populates="destinationDetail")
    airportDetail = relationship("Airport", back_populates="destinationDetail", cascade="all, delete")

    def __init__(self,
                 name=None,
                 requiered_visa="",
                 airport=None):
        self.name = name
        self.requiered_visa = requiered_visa
        self.airport = airport

    def createDestination(self, data):
        self.name = data["name"]
        self.requiered_visa = True if data["requiered_visa"] == 1 else False
        self.airport = data["airport"]

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()

    def to_dict(self):
        print(self.requiered_visa)
        return {
            "id": self.id,
            "name": self.name,
            "requiered_visa": True if self.requiered_visa else False,
            "airport": self.airport}
