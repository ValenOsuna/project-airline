from sqlalchemy import Column, String, Integer, Float , ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Cursor


class Boletos(Base):
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

    def cargar_boleto(self):
        self.gate = input("Ingrese el gate de destino: ")
        self.aerolinea = input("Ingrese la aerolinea de destino: ")
        self.terminal = int(input("Ingrese su terminal: "))
        self.asiento = int(input("Ingrese su nro de asiento: "))
        self.precio = float(input("Ingrese el precio del boleto:$ "))

    def save(self):
        Cursor.add(self)
        Cursor.commit()
