import React, { Component } from "react";
import SaleDataService from "../services/sale.services"; 


export default class SaleCreate extends Component { 

    constructor(props) {
        super(props);
        this.PostSale = this.PostSale.bind(this);
        this.onChangeIssueDate = this.onChangeIssueDate.bind(this);
        this.onChangeReservationNumber = this.onChangeReservationNumber.bind(this);
        this.onChangePayMethod = this.onChangePayMethod.bind(this);
        this.onChangeFare = this.onChangeFare.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeFlight = this.onChangeFlight.bind(this);
        this.onChangeLuggage = this.onChangeLuggage.bind(this);
        this.onChangePassenger = this.onChangePassenger.bind(this);
        this.onChangeSeat = this.onChangeSeat.bind(this);
        
        this.state = {
            IssueDate: null,
            ReservationNumber: null,
            PayMethod: null,
            fare: null,
            price: null,
            flight: null,
            luggage: null,
            passenger: null,
            seat:null
        };
    }



    PostSale() {
        const saleData = {
            issue_date: this.state.IssueDate,
            reservation_number: parseInt(this.state.ReservationNumber),
            pay_method: parseInt(this.state.PayMethod),
            fare: this.state.fare,
            price: Number.parseFloat(this.state.price),
            flight: this.state.flight,
            luggage: parseInt(this.state.luggage),
            passenger_data: parseInt(this.state.passenger),
            seat : this.state.seat
        };
    
        
        console.log(saleData)
        SaleDataService.create(saleData)
        
        .then(response => {
            console.log("Venta creada:", response.data);
            
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeIssueDate(e){
        this.setState({
            IssueDate: e.target.value
        });
    }

    onChangeReservationNumber(e){
        this.setState({
            ReservationNumber: e.target.value
        });
    }
    onChangeSeat(e){
        this.setState({
            seat: e.target.value
        });
    }

    onChangePayMethod(e){
        this.setState({
            PayMethod: e.target.value
        });
    }

    onChangeFare(e){
        this.setState({
            fare: e.target.value
        });
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }

    onChangeFlight(e){
        this.setState({
            flight: e.target.value
        });
    }

    onChangeLuggage(e){
        this.setState({
            luggage: e.target.value
        });
    }

    onChangePassenger(e){
        this.setState({
            passenger: e.target.value
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>Fecha tramite</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" value={ this.state.IssueDate} onChange={this.onChangeIssueDate} />
                                </div>
                            

                                <div className="mb-3">
                                    <label className="form-label"><h4>Numero reserva</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" surname="surname" value={ this.state.ReservationNumber} onChange={this.onChangeReservationNumber}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Precio</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="accumulated_miles" value={ this.state.price} onChange={this.onChangePrice} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Equipaje</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="luggage" value={ this.state.luggage} onChange={this.onChangeLuggage} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Metodo pago</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="passport_number" value={ this.state.PayMethod} onChange={this.onChangePayMethod} />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label"><h4>Asiento</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.seat} onChange={this.onChangeSeat} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Tarifa</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="nationality" value={ this.state.fare} onChange={this.onChangeFare} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>ID vuelo</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.flight} onChange={this.onChangeFlight} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>ID pasajero</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.passenger} onChange={this.onChangePassenger} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={ this.PostSale}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}
