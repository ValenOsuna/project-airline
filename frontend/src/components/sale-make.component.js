import React, { Component } from "react";
import ClientDataServices from "../services/clients.services";
import DestinationsDataService from "../services/destinations.services";
import FlightDataService from "../services/flight.services";
import SeatDataService from "../services/seat.services";
import SaleDataService from "../services/sale.services";
import Class from "./class.component";
import { FixedButton } from "./schema-aux.component";
import AlertMessage from "./alert-view.component";
import Resume from "./sale-resume.component";
import { Link } from "react-router-dom";


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
      price: 0,
      alertData: {
        "visible": false,
        "type": "",
        "message": ""}
    };
  }

  handleNext() {
   
    console.log("aca", this.state.formData.reservation_number)
    this.setState(
      {
        step: this.state.step + 1,
      },
      () => {
        if (this.state.step === 3) {
          this.getFlight();
        }
        

        if (this.state.step === 4) {
          FixedButton(this.state.selectedSeats

          );
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
    } , () => {
      if (this.state.step === 4) {
        FixedButton(this.state.selectedSeats

        );
      }
    });
  }

  handleSubmit(event) { 

    this.setState({
      alertData: {
        "visible": false,
        "type": "",
        "message": ""},
      formData : {
        "issue_date": new Date().toJSON().slice(0, 10),
        "pay_method": true,
        "accumulated_miles": this.state.accumulated_miles,
        "fare": this.state.clientFare,
        "passenger_data": this.state.passport_number,
        "price": this.state.price,
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

  .then(response => {
    if (!response.data.error){
      console.log(response.data);
      this.setState({formData: response.data, step : this.state.step + 1 }) }

    else{
      this.setState({
        alertData: {
            "visible": true,
            "type": "danger",
            "message": response.data.error }
    });
    }})

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

    ClientDataServices.getPassengerByPassport(id_client)
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
    this.setState({ price : 0});
    for (var i = 0 ; i < wantedFare.length ; i++){

      SaleDataService.getSalesPrice(wantedFare[i].fare , flight_price)
      
      .then((response) => {
        this.setState({ price : parseInt(response.data) + this.state.price });
      
      })
      .catch((e) => {
        console.log(e);
      });
    }}

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
      this.getSalePrice(this.state.selectedSeats, this.state.flight)
      
  
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

  winPrint() {
    window.print();
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
                        value={this.state.passport_number}
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
                    

                <div class="card bg-body-secondary mb-3">
                <ul class="list-group list-group-flush ">
                  <li class="list-group-item bg-body-secondary">Nombre: {this.state.name}</li>
                  <li class="list-group-item bg-body-secondary">Apellido: {this.state.surname}</li>
                  <li class="list-group-item bg-body-secondary">Numero Pasaporte: {this.state.passport_number}</li>
                </ul>
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
                          fare = {this.state.clientFare}
                        />):("-")}

                        <div class="card border-success">
                          <div class="card-body">
                            <h5 class="card-title text-center">Precio final:</h5>
                            <p class="card-text text-center text-success">$ {this.state.price}</p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                )}

{this.state.step === 5 && (
                  <div className="row">
                    <div className="mb-3">
                    <div className="col-3 end-0 z-0 position-absolute"> 
  <AlertMessage 
      message= {this.state.alertData.message}
      type= {this.state.alertData.type}
      visible= {this.state.alertData.visible}
  />
</div>
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
{this.state.step === 6 && this.state.formData.reservation_number &&(
  <Resume
  formData={this.state.formData}
  />)}


                <div className="d-flex justify-content-between">
                {this.state.step === 6 && ( 
                      <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.winPrint}
                    >
                      Imprimir
                    </button>

                    
                  )}
                  {this.state.step === 6 && (
                      <Link to="/">
                      <button
                      type="button"
                      className="btn btn-success mt-1"
                     
                    >
                      Finalizar
                    </button>
                    </Link>

                    
                  )}
                  {this.state.step > 1 && this.state.step < 6 && (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handlePrevious}
                    >
                      Previo
                    </button>
                  )}
                  {this.state.step < 5 && (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handleNext}
                    >
                      Siguiente
                    </button>
                  ) }{ this.state.step === 5 && (
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
