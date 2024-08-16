from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Cursor


class Airlines(Base):
    __tablename__= "Airlines"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    name = Column("name", String)
    acronym = Column("acronym", String)
    flight_list = Column("flight_list", Integer , ForeignKey("Flights.id"))

    flightDetail = relationship("Flights", back_populates="airlineDetail", cascade="all, delete")
    
    def __init__(self,
                 name="",
                 acronym="",
                 flight_list=""):
        
        self.name=name
        self.acronym=acronym
        self.flight_list=flight_list


    def Cargar(self, Data):
        self.name = Data["name"]
        self.acronym = Data["acronym"]
        self.flight_list = Data["flight_list"]
        

    def save(self):
        Cursor.add(self)
        Cursor.commit()
        Cursor.flush()

