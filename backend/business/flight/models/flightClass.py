from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db import Base, Session


class Flight(Base):
    __tablename__ = "flights"

    id = Column("id", Integer, autoincrement=True, unique=True, primary_key=True)
    destination = Column("destination", Integer, ForeignKey("destinations.id"))
    origin = Column("origin", String, nullable=False)
    departure_time = Column("departure_time", String, nullable=False)
    boarding_time = Column("boarding_time", String, nullable=False)
    airplane = Column("airplane", Integer, ForeignKey("airplanes.id"))
    terminal = Column("terminal", String, nullable=False)
    group = Column("group", Integer, nullable=False)
    gate = Column("gate", Integer, nullable=False)
    row = Column("row", String, nullable=False)
    column = Column("column", Integer, nullable=False)

    destinationDetail = relationship("Destination", back_populates="flightDetail")
    airplaneDetail = relationship("Airplane", back_populates="flightDetail")
    ticketDetail = relationship("Ticket", back_populates="flightDetail", cascade="all, delete")
    airlineDetail = relationship("Airlines", back_populates="flightDetail")
    saleDetail = relationship("Sale", back_populates="flightDetail")
    seatRelation = relationship("Seat", back_populates="flightRelation")

    def __init__(self,
                 destination=None,
                 origin=None,
                 departure_time=None,
                 boarding_time=None,
                 airplane=None,
                 terminal=None,
                 group=None,
                 gate=None,
                 row=None,
                 column=None
                 ):

        self.destination = destination
        self.origin = origin
        self.departure_time = departure_time
        self.boarding_time = boarding_time
        self.airplane = airplane
        self.group = group
        self.terminal = terminal
        self.gate = gate
        self.row = row
        self.column = column

    def Cargar(self, Data):
        self.destination = Data["destination"]
        self.origin = Data["origin"]
        self.departure_time = Data["departure_time"]
        self.boarding_time = Data["boarding_time"]
        self.airplane = Data["airplane"]
        self.terminal = Data["terminal"]
        self.group = Data["group"]
        self.gate = Data["gate"]
        self.row = Data["row"]
        self.column = Data["column"]

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.refresh(self)
        session.close()

    def to_dict(self):
        return {
            "destination": self.destination,
            "origin": self.origin,
            "departure_time": self.departure_time,
            "boarding_time": self.boarding_time,
            "airplane": self.airplane,
            "terminal": self.terminal,
            "group": self.group,
            "gate": self.gate,
            "row": self.row,
            "column": self.column,
        }
