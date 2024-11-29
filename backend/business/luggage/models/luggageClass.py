from sqlalchemy import Column, String, Integer
from db import Base, Session


class Luggages(Base):
    __tablename__ = "luggages"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    type = Column("type", String, nullable=False)
    weight = Column("weight", Integer, nullable=False)
    type_flight = Column("type_flight", String, nullable=False)

    def __init__(self, type="", weight="", type_flight=""):
        self.type = type
        self.weight = weight
        self.type_flight = type_flight

    def create(self, Data):
        self.type = Data["type"]
        self.weight = Data["weight"]
        self.type_flight = Data["type_flight"]
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()

    def to_dict(self):
        return {
            "type": self.type,
            "weight": self.weight,
            "type_flight": self.type_flight}
