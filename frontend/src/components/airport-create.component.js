import React, { Component } from "react";
import AirportDataService from "../services/airport.services"; 


export default class AirportCreate extends Component{ 

    constructor(props){
        super(props);
        this.PostAirport = this.PostAirport.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeAcronym = this.onChangeAcronym.bind(this);
        this.onChangeGates = this.onChangeGates.bind(this);
        this.state = {
    
            city: null,
            country: null,
            acronym: null,
            gates: null,
        };
    }

    PostAirport(){
        const airportData = {
            city: this.state.city,
            country: this.state.country,
            acronym: this.state.acronym,
            gates: this.state.gates,
        };
        
        console.log(airportData)
        AirportDataService.create(airportData)
        
        .then(response => {
            console.log("Aeropuerto creado:", response.data);
            
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country: e.target.value
        });
    }

    onChangeAcronym(e){
        this.setState({
            acronym: e.target.value
        });
    }

    onChangeGates(e){
        this.setState({
            gates: e.target.value
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
                                    <label className="form-label"><h4>Ciudad</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" city="city" value={ this.state.city} onChange={this.onChangeCity} />
                                </div>
                            

                                <div className="mb-3">
                                    <label className="form-label"><h4>Pais</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" country="country" value={ this.state.country} onChange={this.onChangeCountry}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Siglas</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" acronym="acronym" value={ this.state.acronym} onChange={this.onChangeAcronym} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Puertas</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" gates="gates" value={ this.state.gates} onChange={this.onChangeGates} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={ this.PostAirport}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>         
        );
    }
}

