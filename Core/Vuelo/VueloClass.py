from sqlalchemy import Column , Integer , String , Float , ForeignKey
from sqlalchemy.orm import relationship

class Vuelo():
    __tablename__ = "Vuelo"

    ID = Column("ID", Integer , autoincrement= True , unique= True , primary_key= True)
    Destino = Column("Destino" , String )
    Origen = Column ("Origen" , String)
    HorarioDespegue = Column ("HorarioDespegue" , String)
    HorarioEmbarque = Column ("HorarioEmbarque" , String)
    Boleto = relationship("boleto", back_populates= "VueloDetalle" , cascade="all, delete")
    Aerolinea = relationship("Aerolineas", back_populates="VueloDetalle")


    def __init__(self, ID , Destino , Origen , HorarioDespegue , HorarioEmbarque):
        self.ID = ID
        self.Destino = Destino
        self.Origen = Origen
        self.HorarioDespegue = HorarioDespegue
        self.HorarioEmbarque = HorarioEmbarque

