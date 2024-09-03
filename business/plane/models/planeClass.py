from sqlalchemy import Column, String, Integer
from db import Base, Session


class Plane(Base):
    __tablename__ = 'planes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    model = Column("model", Integer)
    ability = Column("ability", String)

    def __init__(self,
                 model=0,
                 ability=""
                 ):
        self.model = model
        self.ability = ability

    def createPlane(self, Data):
        self.model = Data["model"]
        self.ability = Data["ability"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
