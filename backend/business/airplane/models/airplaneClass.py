from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from db import Base, Session


class Airplane(Base):
    __tablename__ = 'airplanes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column("model", String, nullable=False)
    capacity = Column("capacity", Integer, nullable=False)
    fare = Column("fare", String, nullable=False)

    flightDetail = relationship("Flight", back_populates="airplaneDetail")

    def __init__(self,
                 model=0,
                 capacity="",
                 fare=""
                 ):
        self.model = model
        self.capacity = capacity
        self.fare = fare

    def createAirplane(self, Data):
        self.model = Data["model"]
        self.capacity = Data["capacity"]
        self.fare = Data["fare"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def to_dict(self):
        return {
            "model": self.model,
            "capacity": self.capacity,
            "fare": self.fare}
