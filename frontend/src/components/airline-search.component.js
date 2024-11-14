import React, { Component } from "react";
import AirlinetDataService from "../services/airline.services"; 


export default class AirlineSearch extends Component{ 

    constructor(props){
        super(props);
        this.getAirline = this.getAirline.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this)
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFlight_list = this.onChangeFlight_list.bind(this);
        this.onChangeAcronym = this.onChangeAcronym.bind(this)
        this.state = {
            id: null,
            data: null,
            name: null,
            flight_list: null,
            acronym: null
        };
    }
    getAirline(){
        var id_airline = this.state.id
        AirlinetDataService.get(id_airline)
            .then(response => {
                console.log (response.data);
                this.setState({
                id: response.data.id,
                name: response.data.name,
                flight_list: response.data.flight_list,
                acronym: response.data.acronym
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

    onChangeFlight_list(e){
        this.setState({
            id: e.target.value
        });
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeAcronym(e){
        this.setState({
            surname: e.target.value
        });
    }

    handleEdit(){
        document.getElementById("viewAirline").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }


    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        const data = {
            id: this.state.id,
            name: this.state.name,
            flight_list: this.state.flight_list,
            acronym: this.state.acronym
        };
        AirlinetDataService.update(data)
    }

    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewAirline").classList.remove("d-none")
    }
            
    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle"  >
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
                    <div className="card mt-5 bg-light-subtle" id="viewAirline">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }>Editar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name"> { this.state.name } </span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Lista vuelos:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight_list">{ this.state.flight_list }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="acronym">{ this.state.acronym } </span>
                                    </div>
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
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="name" value={this.state.name} onChange={this.onChangeName}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Lista vuelos:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="flight_list" value={this.state.flight_list} onChange={this.onChangeFlight_list}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Siglas:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="acronym" value={this.state.acronym} onChange={this.onChangeAcronym}></input>
                                    </div>
                                                                   
                                </div>

                                    <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={ this.handlePutEdit }>Guardar&#160; <i class="fa-solid fa-save"></i></button>


                            </div>                           

                        </div>
                    </div>
                </div>  
        );
    }
}