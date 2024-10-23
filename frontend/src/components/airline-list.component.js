import React, { Component } from "react";
import AirlinetDataService from "../services/airline.services"; 


export default class AirlineList extends Component{ 

    constructor(props){
        super(props);
        this.getAirline = this.getAirline.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getAirline(){
        var id_airline = this.state.id
        AirlinetDataService.get(id_airline)
            .then(response => {
                console.log (response.data);
                document.getElementById('name').innerText = response.data.name;
                document.getElementById('flight_list').innerText = response.data.fligth_list;
                document.getElementById('acronym').innerText = response.data.acronym;
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
                                    <label className="form-label"><h4>ID Aerolinea</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getAirline }>Buscar</button>
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
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Lista vuelos:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight_list"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="acronym"></span>
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