import React, { Component } from "react";
import AirplaneDataService from "../services/airplane.services"; 

export default class AirplaneSearch extends Component{

    constructor(props){
        super(props);
        this.getAirplane = this.getAirplane.bind(this);
        this.AirplaneDelete = this.AirplaneDelete.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeFare = this.onChangeFare.bind(this);
        this.state = {
            id: null,
            model: null,
            capacity: null,
            fare: null
        };
    }

    getAirplane(){
        var id_airplane = this.state.id;
        AirplaneDataService.get(id_airplane)
        .then(response => {
            console.log(response.data);
            this.setState({
                id: response.data.id,
                model: response.data.model,
                capacity: response.data.capacity,
                fare: response.data.fare
            });   
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeId(e){
        this.setState({
            id: e.target.value
        }); console.log(this.state.id)
    }

    onChangeModel(e){
        this.setState({
            model: e.target.value
        });
    }

    onChangeCapacity(e){
        this.setState({
            capacity: e.target.value
        });
    }

    onChangeFare(e){
        this.setState({
            fare: e.target.value
        });
    }

    handleEdit(){
        document.getElementById("viewAirplane").classList.add("d-none");
        document.getElementById("viewEdit").classList.remove("d-none");
    }

    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true);
        const data = {
            id: this.state.id,
            model: this.state.model,
            capacity: this.state.capacity,
            fare: this.state.fare
        };
        AirplaneDataService.update(data);
    }

    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none");
        document.getElementById("viewAirplane").classList.remove("d-none");
    }

    AirplaneDelete(){
        AirplaneDataService.delete(this.state.id);
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Avión</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.getAirplane}>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewAirplane">
                        <div className="card-body">
                            <h4>Datos del Avión:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={this.handleEdit}>Editar <i className="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={this.AirplaneDelete}>Eliminar <i className="bi bi-trash"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Modelo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="model">{this.state.model}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Capacidad:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="capacity">{this.state.capacity}</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="fare">{this.state.fare}</span>
                                    </div>                               
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Editar Datos del Avión:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancelar <i className="fa-solid fa-times"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Modelo:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="model" value={this.state.model} onChange={this.onChangeModel}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Capacidad:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="capacity" value={this.state.capacity} onChange={this.onChangeCapacity}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="fare" value={this.state.fare} onChange={this.onChangeFare}></input>
                                    </div>
                                </div>                            

                                <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={this.handlePutEdit}>Guardar&#160; <i className="fa-solid fa-save"></i></button>
                            </div>                           
                        </div>
                    </div>
                </div>  
            </div>         
        );
    }
}
