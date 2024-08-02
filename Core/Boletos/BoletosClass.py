from sqlalchemy import Column, String, Integer, Float , ForeignKey
from sqlalchemy.orm import relationship


class Boletos():
    __tablename__ = 'boletos'

    id = Column(Integer, primary_key=True, autoincrement=True)
    precio = Column("precio", Float)
    gate = Column("gate", String)
    aerolinea = Column("aerolinea", String)
    terminal = Column("terminal", Integer)
    asiento = Column("asiento", Integer)
    Vuelo = Column("Vuelo" , Integer , ForeignKey("Vuelo.id"))
    VueloDetalle = relationship("Vuelo", back_populates= "Boleto" , cascade="all, delete")


    def __init__(self,
                 precio=0,
                 gate="",
                 aerolinea="",
                 terminal=0,
                 asiento=0
                 ):
        self.precio = precio
        self.Gate = gate
        self.Aerolinea = aerolinea
        self.Terminal = terminal
        self.Asiento = asiento
