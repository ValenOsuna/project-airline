from sqlalchemy import Column , Integer , String , Float , ForeignKey
from sqlalchemy.orm import relationship

class Vuelo():
    __tablename__ = "Estudiantes"

    Numero = Column("Numero", Integer , autoincrement= True , unique= True , primary_key= True)
    Destino = Column("Destino" , String )
    Origen = Column ("Origen" , String)
    HorarioDespegue = Column ("HorarioDespegue" , String)
    HorarioEmbarque = Column ("HorarioEmbarque" , String)

    def __init__(self, Numero , Destino , Origen , HorarioDespegue , HorarioEmbarque):
        self.Numero = Numero
        self.Destino = Destino
        self.Origen = Origen
        self.HorarioDespegue = HorarioDespegue
        self.HorarioEmbarque = HorarioEmbarque

