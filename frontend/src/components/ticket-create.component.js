import React, { Component } from "react";
import TicketDataServices from "../services/tickets.services"; 


export default class TicketCreate extends Component{ 

    constructor(props){
        super(props);
        this.PostTicket = this.PostTicket.bind(this);
        this.onChangeAirline = this.onChangeAirline.bind(this);
        this.onChangeGate = this.onChangeGate.bind(this);
        this.onChangeTerminal = this.onChangeTerminal.bind(this);
        this.onChangeSeat = this.onChangeSeat.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
        this.onChangeFlight = this.onChangeFlight.bind(this);
        this.state = {
    
            airline: null,
            gate: null,
            terminal: null,
            seat: null,
            group: null,
            flight: null,
        };
    }

    PostTicket(){
        const clientData = {
            airline: this.state.airline,
            gate: this.state.gate,
            terminal: this.state.terminal,
            seat: this.state.seat,
            group: this.state.group,
            flight: this.state.flight,
        };
        
        console.log(clientData)
        TicketDataServices.create(clientData)
        
        .then(response => {
            console.log("Ticket creado:", response.data);
            
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeAirline(e){
        this.setState({
            airline: e.target.value
        });
    }

    onChangeGate(e){
        this.setState({
            gate: e.target.value
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

    render(){
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>Aerolinea</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" airline="airline" value={ this.state.airline} onChange={this.onChangeAirline} />
                                </div>
                            

                                <div className="mb-3">
                                    <label className="form-label"><h4>Puerta</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" gate="gate" value={ this.state.gate} onChange={this.onChangeGate}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Terminal</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" terminal="terminal" value={ this.state.terminal} onChange={this.onChangeTerminal} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Asiento</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" seat="seat" value={ this.state.seat} onChange={this.onChangeSeat} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Grupo</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" group="group" value={ this.state.group} onChange={this.onChangeGroup} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Vuelo</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" flight="flight" value={ this.state.flight} onChange={this.onChangeFlight} />
                                </div>
                                
                                <button type="button" className="btn btn-success" onClick={ this.PostTicket}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}
