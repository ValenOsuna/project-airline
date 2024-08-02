from sqlalchemy import Column, String, Integer , ForeignKey
from sqlalchemy.orm import relationship

class Aerolinea():
    __tablename__= "Aerolineas"

    nombre = Column("nombre", String, primary_key= True)
    sigla = Column("sigla", String)
    lista_vuelos = Column("lista_vuelos", Integer , ForeignKey("Vuelo.ID"))
    VueloDetalle = relationship("Vuelo", back_populates="Aerolinea", cascade="all, delete")
    
    def __init__(self,
                 nombre="",
                 sigla="",
                 lista_vuelos=""):
        
        self.nombre=nombre
        self.sigla=sigla
        self.lista_vuelos=lista_vuelos
