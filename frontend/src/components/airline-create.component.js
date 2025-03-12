import React, { Component } from "react";
import AirlineDataService from "../services/airline.services"; 


export default class AirlineCreate extends Component{ 

    constructor(props){
        super(props);
        this.PostAirline = this.PostAirline.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAcronym = this.onChangeAcronym.bind(this);
        this.onChangeflight_list = this.onChangeflight_list.bind(this);
        this.state = {
    
            name: null,
            acronym: null,
            flight_list: null,
        };
    }

    PostAirline(){
        const airlineData = {
            name: this.state.name,
            acronym: this.state.acronym,
            flight_list: this.state.flight_list,
        };
        
        console.log(airlineData)
        AirlineDataService.create(airlineData)
        
        .then(response => {
            console.log("Aerolinea creada:", response.data);
            
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeAcronym(e){
        this.setState({
            acronym: e.target.value
        });
    }

    onChangeflight_list(e){
        this.setState({
            flight_list: e.target.value
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
                                    <label className="form-label"><h4>Nombre</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" name="name" value={ this.state.name} onChange={this.onChangeName} />
                                </div>
                            

                                <div className="mb-3">
                                    <label className="form-label"><h4>sigla</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" acronym="acronym" value={ this.state.acronym} onChange={this.onChangeAcronym}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Listas vuelo</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" flight_list="flight_list" value={ this.state.flight_list} onChange={this.onChangeflight_list} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={ this.PostAirline}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}