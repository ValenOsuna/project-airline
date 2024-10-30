import React, { Component } from "react";
import FlightDataService from "../services/flight.services"; 


export default class FlightCreate extends Component { 

    constructor(props) {
        super(props);
        this.PostFlight = this.PostFlight.bind(this);
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
            destination: null,
            origin: null,
            departure_time: null,
            boarding_time: null,
            airplane: null,
            terminal: null,
            group: null,
            gate: null,
            row: null
        };
    }

    PostFlight() {
        const flightData = {
            destination: parseInt(this.state.destination),
            origin: parseInt(this.state.origin),
            departure_time: this.state.departure_time,
            boarding_time: this.state.boarding_time,
            airplane: parseInt(this.state.airplane),
            terminal: this.state.terminal,
            group: parseInt(this.state.group),
            gate: parseInt(this.state.gate),
            row: "[" + this.state.row + "]"
        };

        console.log(flightData);
        FlightDataService.create(flightData)
            .then(response => {
                console.log("Venta creada:", response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeDestination(e){
        this.setState({
            destination: e.target.value
        });
    }

    onChangeOrigin(e){
        this.setState({
            origin: e.target.value
        });
    }

    onChangeDepartureTime(e){
        this.setState({
            departure_time: e.target.value
        });
    }

    onChangeBoardingTime(e){
        this.setState({
            boarding_time: e.target.value
        });
    }

    onChangeAirplane(e){
        this.setState({
            airplane: e.target.value
        });
    }

    onChangeTerminal(e){
        this.setState({
            terminal: e.target.value
        });
    }

    onChangeGroup(e){
        this.setState({
            group: e.target.value
        });
    }

    onChangeGate(e){
        this.setState({
            gate: e.target.value
        });
    }

    onChangeRow(e){
        this.setState({
            row: e.target.value
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
                                    <label className="form-label"><h4>Destino</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" value={ this.state.destination} onChange={this.onChangeDestination} />
                                </div>
                            

                                <div className="mb-3">
                                    <label className="form-label"><h4>Origen</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" surname="surname" value={ this.state.origin} onChange={this.onChangeOrigin}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Horario partida</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="accumulated_miles" value={ this.state.departure_time} onChange={this.onChangeDepartureTime} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Horario Embarque</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="luggage" value={ this.state.boarding_time} onChange={this.onChangeBoardingTime} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>airplane</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="passport_number" value={ this.state.airplane} onChange={this.onChangeAirplane} />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label"><h4>terminal</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.terminal} onChange={this.onChangeTerminal} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>group</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="nationality" value={ this.state.group} onChange={this.onChangeGroup} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>gate</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.gate} onChange={this.onChangeGate} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>row</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.row} onChange={this.onChangeRow} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={ this.PostFlight}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}