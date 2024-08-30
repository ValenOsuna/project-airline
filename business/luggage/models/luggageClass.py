from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Session

class Luggages(Base):
    __tablename__= "luggages"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    type = Column("type", Integer, nullable =False)
    weight = Column("weigth", Integer, nullable=False)
    type_flight = Column("type_flight", Integer, nullable=False)

    pasengerDetail = relationship("Pasenger", back_populates="luggageDetail")

    def __init__(self, type="", weight="", type_flight=""):
        self.type=type
        self.weight=weight
        self.type_flight=type_flight

    def create(self, Data):
        self.type = Data["type"]
        self.weight = Data["weight"]
        self.type_flight = Data["type_flight"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()