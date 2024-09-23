from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session

class Flight(Base):
    __tablename__ = "flights"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    destination = Column("destination", Integer, ForeignKey("destinations.id"))
    origin = Column("origin", String)
    departure_time = Column("departure_time", String)
    boarding_time = Column("boarding_time", String)
    plane = Column("plane", Integer, ForeignKey("planes.id"))

    destinationDetail = relationship("Destination", back_populates="flightDetail")
    planeDetail = relationship("Plane", back_populates="flightDetail")
    ticketDetail = relationship("Ticket", back_populates="flightDetail", cascade="all, delete")
    airlineDetail = relationship("Airlines", back_populates="flightDetail")
    saleDetail = relationship("Sale", back_populates="flightDetail")

    def __init__(self,
                 destination  = None ,
                 origin  = None,
                 departure_time = None,
                 boarding_time = None,
                 plane=""
                 ):
        
        self.destination = destination
        self.origin = origin
        self.departure_time = departure_time
        self.boarding_time = boarding_time
        self.plane = plane

    def Cargar(self, Data):
        self.destination = Data["destination"]
        self.origin = Data["origin"]
        self.departure_time = Data["departure_time"]
        self.boarding_time = Data["boarding_time"]
        self.plane = Data["plane"]
        

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()


