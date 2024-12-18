from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

DATABASE_URL = "mysql+pymysql://root:46251275@localhost/airline"
ENGINE = create_engine(DATABASE_URL)

try:
    connection = ENGINE.connect()
    print("Exito")
    Session = sessionmaker(bind=ENGINE)

except:
    print("error de conexion")
    raise
"""
{this.state.seatsList.map((seat) => (
                            <><div class="col-md-4">
                          <div class="seat">{seat.seat}</div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                              <div class="col-12">
                                <div class="seat"></div>
                              </div>
                            </div>
                          </div></>
                        ))}
"""
