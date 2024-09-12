from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

DATABASE_URL = "mysql+pymysql://root:Emilia2210@localhost/airline"
ENGINE = create_engine(DATABASE_URL)

try:
    connection = ENGINE.connect()
    print("Exito")
    Session = sessionmaker(bind=ENGINE)

except:
    print("error de conexion")
    raise

