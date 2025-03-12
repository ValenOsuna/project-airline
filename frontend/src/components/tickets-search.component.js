import React, { Component } from "react";
import TicketDataServices from "../services/tickets.services"; 


export default class TicketSearch extends Component{ 

    constructor(props){
        super(props);
        this.getTicket = this.getTicket.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeGate = this.onChangeGate.bind(this);
        this.onChangeAirline = this.onChangeAirline.bind(this);
        this.onChangeTerminal = this.onChangeTerminal.bind(this);
        this.onChangeSeat = this.onChangeSeat.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
        this.onChangeFlight = this.onChangeFlight.bind(this);
        this.state = {
            id: null,
            data: null,
            gate: null,
            airline: null,
            terminal: null,
            seat: null,
            group: null,
            flight: null,
        };
    }
    getTicket(){
        var id_tictek = this.state.id
        
        TicketDataServices.get(id_tictek)
            .then(response => {
                console.log (response.data);
                
                this.setState({
                    id: response.data.id,
                    gate: response.data.gate,
                    airline: response.data.airline,
                    terminal: response.data.terminal,
                    seat: response.data.seat,
                    group: response.data.group,
                    flight: response.data.flight
            })
        })
            .catch(e => {
                console.log(e);
            });
    }
    onChangeId(e){
        this.setState({
            id: e.target.value
        });
    }
    onChangeGate(e){
        this.setState({
            gate: e.target.value
        });
    }
    onChangeAirline(e){
        this.setState({
            airline: e.target.value
        });
    }

    onChangeTerminal(e){
        this.setState({
            terminal: e.target.value
        });
    }

    onChangeSeat(e){
        this.setState({
            seat: e.target.value
        });
    }

    onChangeGroup(e){
        this.setState({
            group: e.target.value
        });
    }

    onChangeFlight(e){
        this.setState({
            flight: e.target.value
        });
    }

    handleEdit(){
        document.getElementById("viewTicket").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }
    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        const ticketData = {
            id: this.state.id,
            gate: this.state.gate,
            airline: this.state.airline,
            terminal: this.state.terminal,
            seat: this.state.seat,
            group: this.state.group,
            flight: this.state.flight
        };
        console.log(ticketData)
        TicketDataServices.update(ticketData)
    }
    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewTicket").classList.remove("d-none")
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Boleto</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getTicket }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
               {this.state.flight !== null &&(<div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewTicket">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }>Editar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puerta:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="gate">{ this.state.gate }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aerolinea:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airline">{ this.state.airline }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Terminal:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="terminal">{ this.state.terminal }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Asiento:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="seat">{ this.state.seat }</span>
                                    </div>
                                        
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Grupo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="group">{ this.state.group }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight">{ this.state.flight }</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={ this.handleCancel }>Cancelar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puerta:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="gate" value={this.state.gate} onChange={this.onChangeGate}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aerolinea:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="airline" value={this.state.airline} onChange={this.onChangeAirline}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Terminal:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="terminal" value={this.state.terminal} onChange={this.onChangeTerminal}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Asiento:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="seat" value={this.state.seat} onChange={this.onChangeSeat}></input>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Grupo:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="group" value={this.state.group} onChange={ this.onChangeGroup }></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&#160;</label>
                                        <input className="fst-italic mt-1 form-control" id="flight" value={this.state.flight} onChange={ this.onChangeFlight }></input>
                                    </div>                              
                                </div>
                                    <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={ this.handlePutEdit }>Guardar&#160; <i class="fa-solid fa-save"></i></button>
                            </div>                           
                        </div>
                    </div>
                </div>)} 
            </div>
        );
    }
 
                                    
}