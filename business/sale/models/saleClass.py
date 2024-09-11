from sqlalchemy import Column , Integer , String ,ForeignKey, Boolean
from sqlalchemy.orm import relationship 
from db import Base, Session


class Sale(Base):
    __tablename__ = "sales"

    id = Column("id" , Integer, autoincrement = True , unique = True , primary_key=True)
    issue_date = Column("issue_date" , String , nullable = False)
    reservation_number = Column("reservation_number" , Integer, unique = True)
    pay_method = Column("pay_method" , Boolean , nullable = False)
    accumulated_miles = Column("accumulated_miles", Integer)
    fare = Column("fare" , Integer , nullable = False)

    pasenger_data = Column("pasenger_data" , Integer , ForeignKey("pasengers.id"))
    ticket_data = Column("ticket_data" , Integer , ForeignKey("tickets.id"))
    plane_data = Column("plane_data" , Integer , ForeignKey("planes.id"))

    planeDetail = relationship("Plane" , back_populates="saleDetail")
    pasengerDetail = relationship("Pasenger" , back_populates= "saleDetail")
    ticketDetail = relationship("Ticket" , back_populates="saleDetail" , cascade= "all, delete")


    def __init__(self,
                issue_date = None ,
                reservation_number  = None , 
                pasenger_data  = None, 
                pay_method  = None, 
                accumulated_miles  = None,
                fare = None,
                plane_data = None,
                ticket_data = None):
        
        self.issue_date = issue_date
        self.reservation_number = reservation_number
        self.pasenger_data = pasenger_data
        self.pay_method = pay_method
        self.accumulated_miles = accumulated_miles
        self.fare = fare
        self.plane_data = plane_data
        self.ticket_data = ticket_data

    def createSale(self,data):
        self.issue_date = data["issue_date"]
        self.reservation_number = data["reservation_number"]
        self.pasenger_data = data["pasenger_data"]
        self.pay_method = data["pay_method"]
        self.accumulated_miles = data["accumulated_miles"]
        self.fare = data["fare"]
        self.plane_data = data["plane_data"]
        self.ticket_data = data["ticket_data"]

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
