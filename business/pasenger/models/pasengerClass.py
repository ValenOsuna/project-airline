from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Session


class Pasenger(Base):
    __tablename__ = "pasengers"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)  
    number_pasaport = Column("number_pasaport", Integer , nullable = False)
    day_pasaport = Column("day_pasaport", Integer , nullable = False)
    nationality = Column("acronym", String, nullable=False)
    country_emision = Column("country_emision", String, nullable = False)
    luggage = Column("luggageClass", Integer , ForeignKey("luggages.id"))

    saleDetail = relationship("Sale" , back_populates= "pasengerDetail" , cascade="all, delete")
    luggageDetail = relationship("Luggage", back_populates= "pasengerDetail" , cascade= "all, delete")

    def __init__(self, number_pasaport="", day_pasaport="", nationality="", country_emision=""):
        self.number_pasaport=number_pasaport
        self.day_pasaport=day_pasaport
        self.nationality=nationality
        self.country_emision=country_emision

    def create(self, Data):
        self.number_pasaport = Data["number_pasaport"]
        self.day_pasaport = Data["day_pasaport"]
        self.nationality = Data["nationality"]
        self.country_emision = ["country_emision"]
        session = Session()
        session.add(self)
        session.commit()
        session.close()

