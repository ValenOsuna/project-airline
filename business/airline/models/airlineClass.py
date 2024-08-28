from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Session


class Airlines(Base):
    __tablename__= "Airlines"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    name = Column("name", String, nullable=False)
    acronym = Column("acronym", String, nullable=False)
    flight_list = Column("flight_list", Integer , ForeignKey("Flights.id"))

    flightDetail = relationship("Flights", back_populates="airlineDetail", cascade="all, delete")
    
    def __init__(self, name="", acronym="", flight_list=""):    
        self.name=name
        self.acronym=acronym
        self.flight_list=flight_list

    @staticmethod
    def search_by_id(id):
        session = Session()
        user = session.query(Airlines).filter_by(id=id).frist()
        session.close()
        return user

    def create(self, Data):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
        self.name = Data["name"]
        self.acronym = Data["acronym"]
        self.flight_list = Data["flight_list"]
        
    def update(self, **kwargs):
        session = Session()
        user = session.query(Airlines).filter_by(id=self.id).first()
        if user:
            for key, value in kwargs.items():
                if hasattr(user, key):
                    setattr(user, key, value)
            session.commit()
            session.refresh(user)
        session.close()
        return user
    
    def delete(self):
        session = Session()
        user = session.query(Airlines).filter_by(id=self.id).first()
        if user:
            session.delete(user)
            session.commit()
        session.close()
        return user

