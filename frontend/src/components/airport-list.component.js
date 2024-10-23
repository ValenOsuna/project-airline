import React, { Component } from "react";
import AirportDataService from "../services/airport.services"; 
import airportServices from "../services/airport.services";


export default class AirportList extends Component{

    constructor(props){
        super(props);
        this.getAirport = this.getAirport.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getAirport(){
        var id_airport = this.state.id
        AirportDataService.get(id_airport)
        .then(response => {
            console.log(response.data)
            document.getElementById('city').innerText = response.data.city;
            document.getElementById('country').innerText = response.data.country;
            document.getElementById('acronym').innerText = response.data.acronym;
            document.getElementById('gates').innerText = response.data.gates;
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

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID aeropuerto</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getAirport }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Ciudad:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="city">value</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Pais:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="country">value</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="acronym">value</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puertas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="gates">value</span>
                                    </div>
                                                                   
                                </div>
                            </div>                           

                        </div>
                    </div>
                </div>  
            </div>         
        );
    }
 
                                    
}