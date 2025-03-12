import React, { Component } from "react";
import FlightDataService from "../services/flight.services";

export default class FlightSearch extends Component {
    constructor(props) {
        super(props);
        this.getFlight = this.getFlight.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDepartureTime = this.onChangeDepartureTime.bind(this);
        this.onChangeBoardingTime = this.onChangeBoardingTime.bind(this);
        this.onChangeAirplane = this.onChangeAirplane.bind(this);
        this.onChangeTerminal = this.onChangeTerminal.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
        this.onChangeGate = this.onChangeGate.bind(this);
        this.onChangeRow = this.onChangeRow.bind(this);

        this.state = {
            id: '',
            destination: '',
            origin: '',
            departure_time: '',
            boarding_time: '',
            airplane: '',
            terminal: '',
            group: '',
            gate: '',
            row: ''
        };
    }

    getFlight() {
        const id_flight = this.state.id;
        FlightDataService.get(id_flight)
            .then(response => {
                
                this.setState({
                    id :response.data.id,
                    destination: response.data.destination,
                    origin: response.data.origin,
                    departure_time: response.data.departure_time,
                    boarding_time: response.data.boarding_time,
                    airplane: response.data.airplane,
                    terminal: response.data.terminal,
                    group: response.data.group,
                    gate: response.data.gate,
                    row: response.data.row
                }); 
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleEdit() {
        
        document.getElementById("viewFlight").classList.add("d-none");
        document.getElementById("viewEdit").classList.remove("d-none");
    }

    handlePutEdit() {
        
        const data = {
            id :this.state.id,
            destination: this.state.destination,
            origin: this.state.origin,
            departure_time: this.state.departure_time,
            boarding_time: this.state.boarding_time,
            airplane: this.state.airplane,
            terminal: this.state.terminal,
            group: this.state.group,
            gate: this.state.gate,
            row: this.state.row
        };

       
        FlightDataService.update(data)
            .then(response => {
                console.log("Flight updated:", response.data);
               
                this.handleCancel();
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleCancel() {
       
        document.getElementById("viewEdit").classList.add("d-none");
        document.getElementById("viewFlight").classList.remove("d-none");
    }

    onChangeId(e) {
        this.setState({ id: e.target.value });
    }

    onChangeDestination(e) {
        this.setState({ destination: e.target.value });
    }

    onChangeOrigin(e) {
        this.setState({ origin: e.target.value });
    }

    onChangeDepartureTime(e) {
        this.setState({ departure_time: e.target.value });
    }

    onChangeBoardingTime(e) {
        this.setState({ boarding_time: e.target.value });
    }

    onChangeAirplane(e) {
        this.setState({ airplane: e.target.value });
    }

    onChangeTerminal(e) {
        this.setState({ terminal: e.target.value });
    }

    onChangeGroup(e) {
        this.setState({ group: e.target.value });
    }

    onChangeGate(e) {
        this.setState({ gate: e.target.value });
    }

    onChangeRow(e) {
        this.setState({ row: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Vuelo</h4></label>
                                    <input
                                        type="text"
                                        className="form-control bg-light-subtle"
                                        id="id"
                                        value={this.state.id}
                                        onChange={this.onChangeId}
                                    />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.getFlight}>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>

               {this.state.group !== '' &&( <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewFlight">
                        <div className="card-body">
                            <h4>Datos del Vuelo:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={this.handleEdit}>
                                        Editar <i className="fa-solid fa-pencil"></i>
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Avion:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.airplane}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Abordaje:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.boarding_time}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Despegue:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.departure_time}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Destino:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.destination}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Origen:&nbsp;</label>
                                        <span className="fst-italic mt-1">{this.state.origin}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Editar Datos del Vuelo:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={this.handleCancel}>
                                        Cancelar <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Avion:&nbsp;</label>
                                        <input
                                            className="fst-italic mt-1 form-control"
                                            value={this.state.airplane}
                                            onChange={this.onChangeAirplane}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Abordaje:&nbsp;</label>
                                        <input
                                            className="fst-italic mt-1 form-control"
                                            value={this.state.boarding_time}
                                            onChange={this.onChangeBoardingTime}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Despegue:&nbsp;</label>
                                        <input
                                            className="fst-italic mt-1 form-control"
                                            value={this.state.departure_time}
                                            onChange={this.onChangeDepartureTime}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Destino:&nbsp;</label>
                                        <input
                                            className="fst-italic mt-1 form-control"
                                            value={this.state.destination}
                                            onChange={this.onChangeDestination}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Origen:&nbsp;</label>
                                        <input
                                            className="fst-italic mt-1 form-control"
                                            value={this.state.origin}
                                            onChange={this.onChangeOrigin}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary mt-3"
                                id="saveButton"
                                onClick={this.handlePutEdit}
                            >
                                Guardar <i className="fa-solid fa-floppy-disk"></i>
                            </button>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}
