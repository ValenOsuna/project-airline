from sqlalchemy import Column , Integer , String 
from sqlalchemy.orm import relationship

class Vuelo():
    __tablename__ = "Vuelo"

    id = Column("id", Integer , autoincrement= True , unique= True , primary_key= True)
    Destino = Column("destino" , String )
    Origen = Column ("origen" , String)
    HorarioDespegue = Column ("horario_despegue" , String)
    HorarioEmbarque = Column ("horario_embarque" , String)
    Boleto = relationship("boleto", back_populates= "vuelo_detalle" , cascade="all, delete")
    Aerolinea = relationship("aerolineas", back_populates="vuelo_detalle")


    def __init__(self, ID , Destino , Origen , HorarioDespegue , HorarioEmbarque):
        self.ID = ID
        self.Destino = Destino
        self.Origen = Origen
        self.HorarioDespegue = HorarioDespegue
        self.HorarioEmbarque = HorarioEmbarque

