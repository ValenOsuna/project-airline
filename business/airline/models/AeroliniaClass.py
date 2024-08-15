from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Cursor


class Aerolinea(Base):
    __tablename__= "Aerolineas"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    nombre = Column("name", String)
    sigla = Column("acronym", String)
    lista_vuelos = Column("flight_list", Integer , ForeignKey("Vuelo.id"))
    VueloDetalle = relationship("Vuelo", back_populates="Aerolinea", cascade="all, delete")
    
    def __init__(self,
                 nombre="",
                 sigla="",
                 lista_vuelos=""):
        
        self.nombre=nombre
        self.sigla=sigla
        self.lista_vuelos=lista_vuelos


    def Cargar(self, Data):
        self.nombre = Data["name"]
        self.sigla = Data["acronym"]
        self.lista_vuelos = Data["flight_list"]
        

    def save(self):
        Cursor.add(self)
        Cursor.commit()
        Cursor.flush()

