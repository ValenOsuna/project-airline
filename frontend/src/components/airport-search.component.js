import React, { Component } from "react";
import AirportDataService from "../services/airport.services"; 



export default class AirportSearch extends Component{

    constructor(props){
        super(props);
        this.getAirport = this.getAirport.bind(this);
        this.AirportDelete = this.AirportDelete.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeAcronym = this.onChangeAcronym.bind(this);
        this.onChangeGates = this.onChangeGates.bind(this);
        this.state = {
            id: null,
            data: null,
            city: null,
            country: null,
            acronym: null,
            gates: null
        };
    }
    getAirport(){
        var id_airport = this.state.id
        AirportDataService.get(id_airport)
        .then(response => {
            
            this.setState({
                id: response.data.id,
                city: response.data.city,
                country: response.data.country,
                acronym: response.data.acronym,
                gates: response.data.gates,
            });   

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

    handleEdit(){
        document.getElementById("viewAirport").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }
    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        const data = {
            id: this.state.id,
            city: this.state.city,
            country: this.state.country,
            acronym: this.state.acronym,
            gates: this.state.gates
        };
        AirportDataService.update(data)
    }

    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewAirport").classList.remove("d-none")
    }

    AirportDelete(){
        AirportDataService.delete(this.state.id)
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Aeropuerto</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getAirport }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.acronym !== null &&(<div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewAirport">
                        <div className="card-body">
                            <h4>Datos del Aeropuerto:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }>Editar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-12 text-end">
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Ciudad:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="city">{ this.state.city }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Pais:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="country">{ this.state.country }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="acronym">{ this.state.acronym }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puertas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="gates">{ this.state.gates }</span>
                                     </div>
                                                                   
                                </div>
                            </div>                           

                        </div>
                    </div>
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Datos del Aeropuerto:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={ this.handleCancel }>Cancelar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Ciudad:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="city" value={this.state.city} onChange={this.onChangeCity}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Pais:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="country" value={this.state.country} onChange={this.onChangeCountry}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="acronym" value={this.state.acronym} onChange={this.onChangeAcronym}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puertas:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="gates" value={this.state.gates} onChange={this.onChangeGates}></input>
                                    </div>
                                    </div>
                                    <div className="col-md-12 text-end">
                                        <button type="submit" class="btn btn-outline-danger" onClick={ this.AirportDelete }>Eliminar <i class="fa-solid fa-trash"></i></button>                         
                                    </div>                     

                                    <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={ this.handlePutEdit }>Guardar&#160; <i class="fa-solid fa-save"></i></button>
                            </div>                           

                        </div>
                    </div>
                </div> )}
            </div>         
        );
    }
}