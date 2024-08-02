from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship
from db import Base , Cursor


class Aerolinea(Base):
    __tablename__= "Aerolineas"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    nombre = Column("nombre", String)
    sigla = Column("sigla", String)
    lista_vuelos = Column("lista_vuelos", Integer , ForeignKey("Vuelo.id"))
    VueloDetalle = relationship("vuelo", back_populates="Aerolinea", cascade="all, delete")
    
    def __init__(self,
                 nombre="",
                 sigla="",
                 lista_vuelos=""):
        
        self.nombre=nombre
        self.sigla=sigla
        self.lista_vuelos=lista_vuelos
