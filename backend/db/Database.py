from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

DATABASE_URL = "mysql+pymysql://root:1235pelansha@localhost/airline"
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

<div className="row">
  <div className="col">
    {Object.entries(this.state.seatsList).map(
      ([row, seats]) => (
        <React.Fragment key={row}>
          {row === "A" &&
            seats.map((seat) => (
              <>
                <div className="row">
                  <div
                    className="col-md-6"
                    key={seat.seat}
                  >
                    <div className="seat">
                      {seat.seat}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-12">
                        <div class="seat"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </React.Fragment>
      )
    )}
  </div>
  <div className="col">
    {Object.entries(this.state.seatsList).map(
      ([row, seats]) => (
        <React.Fragment key={row}>
          {row === "B" &&
            seats.map((seat) => (
              <>
                <div className="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-12">
                        <div class="seat"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    key={seat.seat}
                  >
                    <div className="seat">
                      {seat.seat}
                    </div>
                  </div>
                </div>
              </>
            ))}
        </React.Fragment>
      )
    )}</div>
    <div className="col">
      {Object.entries(this.state.seatsList).map(
        ([row, seats]) => (
          <React.Fragment key={row}>
            {row === "C" &&
              seats.map((seat) => (
                <>
                  <div className="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-12">
                          <div class="seat"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      key={seat.seat}
                    >
                      <div className="seat">
                        {seat.seat}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </React.Fragment>
        )
      )}
    </div>
    <div className="col">
      {Object.entries(this.state.seatsList).map(
        ([row, seats]) => (
          <React.Fragment key={row}>
            {row === "D" &&
              seats.map((seat) => (
                <>
                  <div className="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-12">
                          <div class="seat"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      key={seat.seat}
                    >
                      <div className="seat">
                        {seat.seat}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </React.Fragment>
        )
      )}
    </div>
    
      <div className="col">
        {Object.entries(this.state.seatsList).map(
          ([row, seats]) => (
            <React.Fragment key={row}>
              {row === "F" &&
                seats.map((seat) => (
                  <>
                    <div className="row">
                      <div
                        className="col-md-6"
                        key={seat.seat}
                      >
                        <div className="seat">
                          {seat.seat}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-12">
                            <div class="seat"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </React.Fragment>
          )
        )}
      </div>

    <div className="col">
      {Object.entries(this.state.seatsList).map(
        ([row, seats]) => (
          <React.Fragment key={row}>
            {row === "G" &&
              seats.map((seat) => (
                <>
                  <div className="row">
                    <div
                      className="col-md-6"
                      key={seat.seat}
                    >
                      <div className="seat">
                        {seat.seat}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-12">
                          <div class="seat"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </React.Fragment>
        )
      )}
    </div>
  </div>
"""