import React, { Component } from "react";
import SaleDataService from "../services/sale.services";

export default class SaleSearch extends Component {

    constructor(props) {
        super(props);
        this.getSale = this.getSale.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

      
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeIssueDate = this.onChangeIssueDate.bind(this);
        this.onChangeReservationNumber = this.onChangeReservationNumber.bind(this);
        this.onChangepay_method = this.onChangepay_method.bind(this);
        this.onChangeFare = this.onChangeFare.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeFlight = this.onChangeFlight.bind(this);
        this.onChangeLuggage = this.onChangeLuggage.bind(this);
        this.onChangePassenger = this.onChangePassenger.bind(this);
        this.onChangeSeat = this.onChangeSeat.bind(this);

        this.state = {
            id: '',
            issue_date: null,
            reservation_number: null,
            pay_method: null,
            fare: null,
            price: null,
            flight: null,
            luggage: null,
            passenger_data: null,
            seat: null
        };
    }

   
    getSale() {
        const id_sale = this.state.id;
        SaleDataService.get(id_sale)
            .then(response => {
                this.setState({
                    id :response.data.id,
                    issue_date: response.data.issue_date,
                    reservation_number: response.data.reservation_number,
                    pay_method: response.data.pay_method,
                    fare: response.data.fare,
                    price: response.data.price,
                    flight: response.data.flight,
                    luggage: response.data.luggage,
                    passenger_data: response.data.passenger_data,
                    seat: response.data.seat
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

   
    handleEdit() {
        document.getElementById("viewSale").classList.add("d-none");
        document.getElementById("viewEdit").classList.remove("d-none");
    }

    handleCancel() {
        document.getElementById("viewEdit").classList.add("d-none");
        document.getElementById("viewSale").classList.remove("d-none");
    }

   
    handlePutEdit() {
        document.getElementById("saveButton").setAttribute("disabled", true);
        
        const data = {
            id :this.state.id,
            issue_date: this.state.issue_date,
            reservation_number: this.state.reservation_number,
            pay_method: this.state.pay_method,
            fare: this.state.fare,
            price: parseFloat(this.state.price),
            flight: this.state.flight,
            luggage: this.state.luggage,
            passenger_data: this.state.passenger_data,
            seat: this.state.seat
        };

        SaleDataService.update(data)
            .then(response => {
                console.log("Sale updated successfully:", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    
    onChangeId(e) {
        this.setState({ id: e.target.value });
    }

    onChangeIssueDate(e) {
        this.setState({ issue_date: e.target.value });
    }

    onChangeReservationNumber(e) {
        this.setState({ reservation_number: e.target.value });
    }

    onChangeSeat(e) {
        this.setState({ seat: e.target.value });
    }

    onChangepay_method(e) {
        this.setState({ pay_method: e.target.value });
    }

    onChangeFare(e) {
        this.setState({ fare: e.target.value });
    }

    onChangePrice(e) {
        this.setState({ price: e.target.value });
    }

    onChangeFlight(e) {
        this.setState({ flight: e.target.value });
    }

    onChangeLuggage(e) {
        this.setState({ luggage: e.target.value });
    }

    onChangePassenger(e) {
        this.setState({ passenger_data: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Venta</h4></label>
                                    <input 
                                        type="text" 
                                        className="form-control bg-light-subtle" 
                                        id="id" 
                                        value={this.state.id} 
                                        onChange={this.onChangeId} 
                                    />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.getSale}>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-9 mb-3">
                    
                    <div className="card mt-5 bg-light-subtle" id="viewSale">
                        <div className="card-body">
                            <h4>Datos de la Venta:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={this.handleEdit}>Editar <i className="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.accumulated_miles}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.fare}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.flight}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha trámite:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.issue_date}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Información pasajero:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.passenger_data}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Medio de pago:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.pay_method}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Precio:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.price}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Número de reserva:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.reservation_number}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Equipaje:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.luggage}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Editar Datos de la Venta:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancelar <i className="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.accumulated_miles} 
                                            onChange={this.onChangeMiles} 
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.fare} 
                                            onChange={this.onChangeFare} 
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha trámite:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.issue_date} 
                                            onChange={this.onChangeIssueDate} 
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Información pasajero:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.passenger_data} 
                                            onChange={this.onChangePassenger} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Medio de pago:&nbsp;</label>
                                        <input className="form-control" value={this.state.pay_method} onChange={this.onChangepay_method} />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Precio:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.price} 
                                            onChange={this.onChangePrice} 
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Número de reserva:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.reservation_number} 
                                            onChange={this.onChangeReservationNumber} 
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Equipaje:&nbsp;</label>
                                        <input 
                                            className="form-control" 
                                            value={this.state.luggage} 
                                            onChange={this.onChangeLuggage} 
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="button" 
                                    id="saveButton" 
                                    className="btn btn-success mt-3" 
                                    onClick={this.handlePutEdit}
                                >
                                    Guardar <i className="fa-solid fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
