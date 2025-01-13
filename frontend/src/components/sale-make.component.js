import React, { Component } from "react";
import ClientDataServices from "../services/clients.services";
import DestinationsDataService from "../services/destinations.services";
import FlightDataService from "../services/flight.services";
import SeatDataService from "../services/seat.services";
import SaleDataService from "../services/sale.services";
import Class from "./class.component";


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
    this.onChangeFare = this.onChangeFare.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onChangeLuggage = this.onChangeLuggage.bind(this); 
    this.onChangeNumberOfsales = this.onChangeNumberOfsales.bind(this);
    this.state = {
      id: null,
      destination: 0,
      origin: 0,
      name: null,
      surname: null,
      passport_number: null,
      accumulated_miles: null,
      destinationlist: [],
      flight: 0,
      flightlist: [],
      seatsList: {},
      airplaneFares : [],
      clientFare: "",
      step: 1,
      formData: {},
      selectedSeats: [],
      luggageType: null,
      numberOfSales: "",
      price: 0
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

  handleSubmit(event) { this.getSalePrice(this.state.clientFare, this.state.flight)
    this.setState({ formData : {
      "issue_date": new Date().toJSON().slice(0, 10) ,
      "reservation_number": 123456789,
      "pay_method": true,
      "accumulated_miles": this.state.accumulated_miles,
      "fare": this.state.clientFare,
      "passenger_data": this.state.passport_number,
      "price": 250,
      "flight": this.state.flight,
      "luggage":this.state.luggageType,
      "seat": this.state.selectedSeats
        
  }} , () => {
    this.makeSale()
    event.preventDefault();
  });
    
  }

  makeSale(){
    SaleDataService.create(this.state.formData)
  .then((response) => {
    console.log(response.data);

   
  })
  .catch((e) => {
    console.log(e);
  });
}


  
  onChangeNumberOfsales(event) {
    this.setState({
      numberOfSales: event.target.value,
    } ,() => {console.log(this.numberOfSales)});

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
          accumulated_miles: response.data.accumulated_miles
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

  getSalePrice(wantedFare, flight_price) {
    SaleDataService.getSalesPrice(wantedFare, flight_price)
      .then((response) => {
        this.setState({ price: response.data });
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
   onChangeSelected(seatsArray){
    this.setState({selectedSeats: seatsArray} , () => {
  
    })
  }

  onChangeLuggage(event) {
    this.setState({ luggageType: event.target.value }, () => {
      console.log(this.state.luggageType);
    });
  }

  onChangeFlight(event) {
    this.setState({ flight: event.target.value }, () => {
      this.getFlightFare(this.state.flight)
      console.log(this.state.flight);
    });
  }  

  onChangeDestination(event) {
    this.setState({ destination: event.target.value }, ()=> {
      console.log(typeof event.target.value)
    });
  }

  onChangeOrigin(event) {
    this.setState({ origin: event.target.value }, ()=> {
      console.log( this.state.origin)});
  }

  getFlightFare(flightId){
    FlightDataService.getFlightFare(flightId)
    .then((response) => {
      this.setState({ airplaneFares: response.data });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  onChangeFare(event) {
    this.setState({ clientFare: event.target.value }, () => {
      this.SeatsGet();
    });
  }

  componentDidMount() {
    this.getDestination();
  }

  SeatsGet() {
    SeatDataService.getSeats(this.state.flight, this.state.clientFare)
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
                            destination.id !== parseInt(this.state.origin) && (
                              <option value= { destination.id }>
                              { destination.name }
                              </option>)
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
                            origin.id !== parseInt(this.state.destination) && (
                              <option value= { origin.id }>
                              { origin.name }
                              </option>)
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
                            <option value={flight.id}>
                              {" "}
                              Fecha : {flight.date} | Horario salida :{" "}
                              {flight.departure_time} | Origen : {flight.origin}{" "}
                              | Destino : {flight.destination}
                            </option>
                          ))}
                        </select>

                        <div class="mb-3 mt-3">
                        <label  for="numero" class="form-label">Número de pasajes</label>
                        <input onChange={this.onChangeNumberOfsales} value= {this.state.numberOfSales} type="number" className="form-control" id="numero" placeholder="Introduce un número" /> 

                      </div>



                      </div>
                    </div>
                  </div>
                )}
                {this.state.step === 4 && (
                  <div className="row">
                    <div className="mb-3">
                      <div className="col-10 mt-4">
                        <label className="form-label">
                          <h4>Asientos Ocupados</h4>
                        </label>
                        <select
                          className="form-control bg-light-subtle"
                          value={this.state.clientFare}
                          onChange={this.onChangeFare}
                        >
                          <option selected>Seleccionar clase</option>
                          {this.state.airplaneFares.map((fare) => (
                            <option value={fare}>
                              {fare === "FC" && "First Class"}
                              {fare === "BC" && "Bussiness Class"}
                              {fare === "PC" && "Premiun Class"}
                              {fare === "EC" && "Economy Class"}
                            </option>
                          ))}
                        </select>
                        {this.state.seatsList ? (
                          <Class
                          response={this.state.seatsList}
                          onChangeSelected={this.onChangeSelected}
                          numberOfSales = {this.state.numberOfSales}
                        />):("-")}
                        </div>
                      </div>
                    </div>
                )}

{this.state.step === 5 && (
                  <div className="row">
                    <div className="mb-3">
                      <div className="col-10 mt-4">
                        <label className="form-label">
                          <h4>Equipaje</h4>
                        </label>

                        <select
                          className="form-control bg-light-subtle"
                          value={this.state.luggageType}
                          onChange={this.onChangeLuggage}
                        >
                                                    
                          <option selected>Seleccionar tipo de Equipaje</option>
                          <option value={1}> Articulos personales</option>
                          <option value={2}> Equipaje de mano </option>
                          <option value={3}> Equipaje facturado </option>

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
                  {this.state.step < 5 ? (
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
