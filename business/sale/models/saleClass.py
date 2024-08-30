from sqlalchemy import Column , Integer , String ,ForeignKey, Boolean
from sqlalchemy.orm import relationship 
from db import Base, Session


class Sale(Base):
    __tablename__ = "sales"

    id = Column("id" , Integer, autoincrement = True , unique = True , primary_key=True)
    issue_date = Column("issue_date" , String , nullable = False)
    reservation_number = Column("reservation_number" , Integer, unique = True)
    passenger_data = Column("passenger_data" , Integer , ForeignKey("passengers.id"))
    pay_method = Column("pay_method" , Boolean , nullable = False)
    accumulated_miles = Column("accumulated_miles", Integer)


    def __init__(self,
                issue_date = None ,
                reservation_number  = None , 
                passenger_data  = None, 
                pay_method  = None, 
                accumulated_miles  = None):
        
        self.issue_date = issue_date
        self.reservation_number = reservation_number
        self.passenger_data = passenger_data
        self.pay_method = pay_method
        self.accumulated_miles = accumulated_miles

    def createSale(self,data):
        self.issue_date = data["issue_date"]
        self.reservation_number = data["reservation_number"]
        self.passenger_data = data["passenger_data"]
        self.pay_method = data["pay_method"]
        self.accumulated_miles = data["accumulated_miles"]

    def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()




