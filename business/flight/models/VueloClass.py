from sqlalchemy import Column , Integer , String 
from sqlalchemy.orm import relationship
from db import Base, Cursor

class Flight(Base):
    __tablename__ = "Flight"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    destination = Column("destination", String)
    origin = Column("origin", String)
    takeoff_time = Column("takeoff_time", String)
    boarding_time = Column("boarding_time", String)


    Boleto = relationship("Ticket", back_populates= "VueloDetalle" , cascade="all, delete")
    Aerolinea = relationship("Aerolinea", back_populates="VueloDetalle")


    def __init__(self, 
                 destination  = None ,
                 origin  = None,
                 takeoff_time = None,
                 boarding_time = None):
        
        self.destination = destination
        self.origin = origin
        self.takeoff_time = takeoff_time
        self.boarding_time = boarding_time

    def Cargar(self, Data):
        self.destination = Data["destination"]
        self.origin = Data["origin"]
        self.takeoff_time = Data["takeoff_time"]
        self.boarding_time = Data["boarding_time"]
        

    def save(self):
        Cursor.add(self)
        Cursor.commit()
        Cursor.flush()

