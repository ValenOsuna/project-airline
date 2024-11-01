import React, { Component } from "react";
import ClientDataServices from "../services/clients.services"; 

export default class ClientSearch extends Component{ 

    constructor(props){
        super(props);
        this.getClient = this.getClient.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }

    getClient(){
        var id_client = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        ClientDataServices.get(id_client)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('name').innerText = response.data.name;
                document.getElementById('surname').innerText = response.data.surname;
                document.getElementById('passport_number').innerText = response.data.passport_number;
                document.getElementById('passport_expiration').innerText = response.data.passport_expiration;
                document.getElementById('nationality').innerText = response.data.nationality;
                document.getElementById('accumulated_miles').innerText = response.data.accumulated_miles;
                document.getElementById('country_emision').innerText = response.data.country_emision;
                document.getElementById('luggage').innerText = response.data.luggage;
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
    handleEdit(){
        document.getElementById("viewClient").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }
    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        console.log("EDIT ACTION")
    }
    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewClient").classList.remove("d-none")
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Cliente</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getClient }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewClient">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }>Editar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Apellido:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="surname"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero pasaporte:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passport_number"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha Expiracion:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passport_expiration"></span>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Nacionalidad:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="nationality"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Pais emisor:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="country_emision"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="accumulated_miles"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Equipaje:&#160;</label>
                                        <span className="fst-italic mt-1" id="luggage"></span>
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
                                        <input className="fst-italic mt-1 form-control" id="name" value={this.state.name}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Apellido:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="surname" value={this.state.surname}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero pasaporte:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="passport_number" value={this.state.passport_number}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha Expiracion:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="passport_expiration" value={this.state.passport_expiration}></input>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                            <label className="text-capitalize fw-bold">Nacionalidad:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="nationality" value={this.state.nationality}></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Pais emisor:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="country_emision" value={this.state.country_emision}></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="accumulated_miles" value={this.state.accumulated_miles}></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Equipaje:&#160;</label>
                                            <input className="fst-italic mt-1 form-control" id="luggage" value={this.state.luggage}></input>
                                        </div>
                                                                    
                                    </div>
                                    
                                        <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={ this.handlePutEdit }>Guardar&#160; <i class="fa-solid fa-save"></i></button>
                                    
                            </div>                           

                        </div>
                    </div>
                </div>  
            </div>         
        );
    }
 
                                    
}