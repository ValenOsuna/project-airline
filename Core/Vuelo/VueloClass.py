from sqlalchemy import Column , Integer , String 
from sqlalchemy.orm import relationship
from db import Base, Cursor

class Vuelo(Base):
    __tablename__ = "Vuelo"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    Destino = Column("destino" , String )
    Origen = Column ("origen" , String)
    HorarioDespegue = Column ("horario_despegue" , String)
    HorarioEmbarque = Column ("horario_embarque" , String)
    Boleto = relationship("Boletos", back_populates= "VueloDetalle" , cascade="all, delete")
    Aerolinea = relationship("Aerolinea", back_populates="VueloDetalle")


    def __init__(self, Destino  = None ,
                 Origen  = None,
                 HorarioDespegue = None,
                   HorarioEmbarque = None):
        
        self.Destino = Destino
        self.Origen = Origen
        self.HorarioDespegue = HorarioDespegue
        self.HorarioEmbarque = HorarioEmbarque

    def Cargar(self, Data):
        self.Destino = Data["Destino"]
        self.Origen = Data["Origen"]
        self.HorarioDespegue = Data["HorarioDespegue"]
        self.HorarioEmbarque = Data["HorarioEmbarque"]
        

    def save(self):
        Cursor.add(self)
        Cursor.commit()
        Cursor.flush()

