from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from db import Base, Session


class Plane(Base):
    __tablename__ = 'planes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column("model", Integer, nullable=False)
    capacity = Column("capacity", Integer, nullable=False)
    fare = Column("fare", Integer, nullable=False)

    saleDetail = relationship("Sale", back_populates="planeDetail", cascade="all, delete")

    def __init__(self,
                 model=0,
                 capacity="",
                 fare=""
                 ):
        self.model = model
        self.capacity = capacity
        self.fare = fare

    def createPlane(self, Data):
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
