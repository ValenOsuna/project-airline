from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from db import Base, Session



class SeatAux(Base):
    __tablename__ = "seats"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)

    flightRelation = relationship("Flight" , back_populates="seatAuxRelation")
    

    def __init__(self):
         pass
        

    def createSeat(self, data):
       pass
    
def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
