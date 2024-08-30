from sqlalchemy import Column , Integer , String ,ForeignKey , Boolean
from sqlalchemy.orm import relationship 
from db import Base, Session

class Destination(Base):
    __tablename__ = "destinations"

    id = Column("id" , autoincrement=True , unique= True , primary_key= True)
    name = Column("name", String )
    requiered_visa = Column("requiered_visa", Boolean)
    airports = Column("airport", Integer , ForeignKey("airports.id"))

    airportDetail = relationship("Airport" , back_populates= "destinationDetail", cascade="all, delete")


    def __init__(self , 
                name = None,
                requiered_visa = None,
                airports = None):
        
        self.name = name
        self.requiered_visa = requiered_visa
        self.airports = airports

    def createDestination(self , data):
        self.name = data["name"]
        self.requiered_visa = data["requiered_visa"]
        self.airports = data["airports"]

    
    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
