import React, { Component } from "react";
import DestinationDataServices from "../services/destinations.services";


export default class DestinationSearch extends Component{

    constructor(props){
        super(props);
        this.getDestination = this.getDestination.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRequiered_visa = this.onChangeRequiered_visa.bind(this);
        this.onChangeAirport = this.onChangeAirport.bind(this)
        this.state = {
            id: null,
            data: null,
            name: null,
            requiered_visa: null,
            airports: null
        };
    }
    getDestination(){
        var id_destination = this.state.id
        
        DestinationDataServices.get(id_destination)
            .then(response => {
                console.log (response.data);
                this.setState({
                
                    id: response.data.id,
                    name: response.data.name,
                    requiered_visa: response.data.requiered_visa,
                    airports: response.data.airports
                
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
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeRequiered_visa(e){
        this.setState({
            requiered_visa: e.target.value
        });
    }
    onChangeAirport(e){
        this.setState({
            airports: e.target.value
        });
    }
    handleEdit(){
        document.getElementById("viewDestination").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }
    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        const data = {
            id: this.state.id,
            name: this.state.name,
            requiered_visa: this.state.requiered_visa,
            airports: this.state.airports,
        };
        console.log(data)
        DestinationDataServices.update(data)
    }

    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewDestination").classList.remove("d-none")
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Destino</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getDestination }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
               {this.state.name !== null &&( <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewDestination">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }>Editar <i class="fa-solid fa-pencil"></i></button>
                                    </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name">{ this.state.name }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Visa Requerida:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="requiered_visa">{ this.state.requiered_visa }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aeropuerto:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airports">{ this.state.airports }</span>
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
                                        <label className="text-capitalize fw-bold">Visa Requerida:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="requiered_visa" value={this.state.requiered_visa} onChange={this.onChangeRequiered_visa}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aeropuerto:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="airport" value={this.state.airports} onChange={this.onChangeAirport}></input>
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