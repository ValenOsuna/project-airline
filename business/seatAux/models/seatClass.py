from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from db import Base, Session


def save(self):
        session = Session()
        session.add(self)
        session.commit()
        session.close()
