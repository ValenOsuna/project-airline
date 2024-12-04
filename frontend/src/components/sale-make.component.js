import React, { Component } from "react";
import ClientDataServices from "../services/clients.services";
import DestinationsDataService from "../services/destinations.services";
import FlightDataService from "../services/flight.services";
import SeatDataService from "../services/seat.services";

export default class SaleMake extends Component {
  constructor(props) {
    super(props);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.SeatsGet = this.SeatsGet.bind(this);
    this.getFlight = this.getFlight.bind(this);
    this.getClient = this.getClient.bind(this);
    this.getDestination = this.getDestination.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeFlight = this.onChangeFlight.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: null,
      destination: 0,
      origin: 0,
      name: null,
      surname: null,
      passport_number: null,
      destinationlist: [],
      flight: 0,
      flightlist: [],
      seatsList: [],
      step: 1,
      formData: {},
    };
  }

  handleNext() {
    this.setState(
      {
        step: this.state.step + 1,
      },
      () => {
        if (this.state.step === 3) {
          this.getFlight();
        }
        if (this.state.step === 4) {
          console.log("Aprobado por chayanne");
          this.SeatsGet();
        }
      }
    );
  }

  onChangeId(event) {
    this.setState({
      id: event.target.value,
    });
  }

  handlePrevious() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  handleInputChange(event) {}

  handleSubmit(event) {
    event.preventDefault();
  }
  getClient() {
    var id_client = this.state.id;

    ClientDataServices.get(id_client)
      .then((response) => {
        console.log(response.data);

        this.setState({
          id: response.data.id,
          name: response.data.name,
          surname: response.data.surname,
          passport_number: response.data.passport_number,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getDestination() {
    DestinationsDataService.getDestinations()
      .then((response) => {
        this.setState({ destinationlist: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getFlight() {
    FlightDataService.getflightsbyorigin(
      this.state.origin,
      this.state.destination
    )
      .then((response) => {
        this.setState({ flightlist: response.data });
        console.log(this.state.flightlist);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChangeDestination(event) {
    this.setState({ destination: event.target.value });
  }

  onChangeOrigin(event) {
    this.setState({ origin: event.target.value });
  }

  onChangeFlight(event) {
    this.setState({ flight: event.target.value });
  }
  //dislexia de event

  componentDidMount() {
    this.getDestination();
  }

  SeatsGet() {
    SeatDataService.getSeats(
      this.state.flight,
    )
      .then((response) => {
        this.setState({ seatsList: response.data });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="col-md-4"></div>
          <div className="col-md-8 mb-3">
            <div className="card mt-5 bg-light-subtle" id="viewClient">
              <div className="card-body">
                {this.state.step === 1 && (
                  <div className="row">
                    <div className="mb-3">
                      <h6>Buscar Usuario:</h6>
                      <input
                        type="text"
                        className="form-control bg-light-subtle"
                        id="id"
                        value={this.state.id}
                        onChange={this.onChangeId}
                      />

                      <button
                        type="button"
                        className="btn btn-success mt-1"
                        onClick={this.getClient}
                      >
                        Buscar
                      </button>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Nombre:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="name">
                          {this.state.name}
                        </span>
                      </div>
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Apellido:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="surname">
                          {this.state.surname}
                        </span>
                      </div>
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Numero pasaporte:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="passport_number">
                          {this.state.passport_number}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.step === 2 && (
                  <div className="row">
                    <div className="mb-3 ">
                      <div className="col-8">
                        <label className="form-label">
                          <h4>Destino</h4>
                        </label>
                        <select
                          className="form-control bg-light-subtle"
                          value={this.state.destination}
                          onChange={this.onChangeDestination}
                        >
                          <option selected>Seleccionar destino</option>
                          {this.state.destinationlist.map((destination) => (
                            <option value={destination.id}>
                              {destination.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-8 mt-4">
                        <label className="form-label">
                          <h4>Origen</h4>
                        </label>
                        <select
                          className="form-control bg-light-subtle"
                          value={this.state.origin}
                          onChange={this.onChangeOrigin}
                        >
                          <option selected>Seleccionar origen</option>
                          {this.state.destinationlist.map((origin) => (
                            <option value={origin.id}>{origin.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.step === 3 && (
                  <div className="row">
                    <div className="mb-3">
                    <div className="col-10 mt-4">
                      <label className="form-label">
                        <h4>Vuelo disponibles</h4>
                      </label>
                      <select
                        className="form-control bg-light-subtle"
                        value={this.state.flight}
                        onChange={this.onChangeFlight}
                      >
                        <option selected>Seleccionar Vuelo</option>
                        {this.state.flightlist.map((flight) => (
                          <option value={flight.id}> Fecha : {flight.date} | Horario salida : {flight.departure_time} | Origen : {flight.origin} | Destino : {flight.destination}</option>
                        ))}
                      </select>
                      </div>
                    </div>
                  </div>
                )}
                  {this.state.step === 4 && (
                  <div className="row">
                    <div className="mb-3">
                    <div className="col-10 mt-4">
                      <label className="form-label">
                        <h4>Asientos ocupados</h4>
                      </label>
                      <select
                        className="form-control bg-light-subtle"
                        value={this.state.seatsList}
                      >
                        {this.state.seatsList.map((seatsIndex) => (
                        <option value={seatsIndex.seat}> {seatsIndex.seat} </option>
                        ))}
                      </select>
                      </div>
                    </div>
                  </div>
                )}


                <div className="d-flex justify-content-between">
                  {this.state.step > 1 && (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handlePrevious}
                    >
                      Previo
                    </button>
                  )}
                  {this.state.step < 4 ? (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handleNext}
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handleSubmit}
                    >
                      Enviar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
