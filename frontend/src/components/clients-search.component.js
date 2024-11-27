import React, { Component } from "react";
import ClientDataServices from "../services/clients.services"; 


export default class ClientSearch extends Component{ 

    constructor(props){
        super(props);
        this.getClient = this.getClient.bind(this);
        this.handlePutEdit = this.handlePutEdit.bind(this)
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.clientDelete = this.clientDelete.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeExpiration = this.onChangeExpiration.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeMiles = this.onChangeMiles.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeLuggage = this.onChangeLuggage.bind(this);
        this.state = {
            id: null,
            data: null,
            name: null,
            surname: null,
            passport_number: null,
            passport_expiration: null,
            nationality: null,
            accumulated_miles: null,
            country_emision: null,
            luggage: null
        };
    }

    getClient(){
        var id_client = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        ClientDataServices.get(id_client)
            .then(response => {
                console.log (response.data);
                
                this.state.id = response.data.id;
                
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    surname: response.data.surname,
                    passport_number: response.data.passport_number,
                    passport_expiration: response.data.passport_expiration,
                    nationality: response.data.nationality,
                    country_emision: response.data.country_emision,
                    accumulated_miles: response.data.accumulated_miles,
                    luggage: response.data.luggage
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

    onChangeSurname(e){
        this.setState({
            surname: e.target.value
        });
    }

    onChangeNumber(e){
        this.setState({
            passport_number: e.target.value
        });
    }

    onChangeExpiration(e){
        this.setState({
            passport_expiration: e.target.value
        });
    }

    onChangeNationality(e){
        this.setState({
            nationality: e.target.value
        });
    }

    onChangeMiles(e){
        this.setState({
            accumulated_miles: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country_emision: e.target.value
        });
    }

    onChangeLuggage(e){
        this.setState({
            luggage: e.target.value
        });
    }

    handleEdit(){
        document.getElementById("viewClient").classList.add("d-none")
        document.getElementById("viewEdit").classList.remove("d-none")
    }
    handlePutEdit(){
        // EDIT SERVICES
        document.getElementById("saveButton").setAttribute("disabled",true)
        const data = {
            id: this.state.id,
            name: this.state.name,
            surname: this.state.surname,
            passport_number: this.state.passport_number,
            passport_expiration: this.state.passport_expiration,
            nationality: this.state.nationality,
            accumulated_miles: this.state.accumulated_miles,
            country_emision: this.state.country_emision,
            luggage: this.state.luggage
        };
        ClientDataServices.update(data)
    }

    handleCancel(){
        document.getElementById("viewEdit").classList.add("d-none")
        document.getElementById("viewClient").classList.remove("d-none")
    }

    clientDelete(){
        ClientDataServices.delete(this.state.id)
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
                                <button type="button" className="btn btn-success" onClick={ this.getClient }> Buscar </button>
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
                                    <button type="button" className="btn btn-warning" onClick={ this.handleEdit }> Editar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name">{ this.state.name }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Apellido:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="surname">{ this.state.surname }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero pasaporte:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passport_number">{ this.state.passport_number }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha Expiracion:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passport_expiration">{ this.state.passport_expiration }</span>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Nacionalidad:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="nationality">{ this.state.nationality }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Pais emisor:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="country_emision">{ this.state.country_emision }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="accumulated_miles">{ this.state.accumulated_miles }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Equipaje:&#160;</label>
                                        <span className="fst-italic mt-1" id="luggage">{ this.state.luggage }</span>
                                    </div>
                                                                   
                                </div>
                                <button type="submit" class="btn btn-outline-danger" onClick={ this.clientDelete }> Eliminar <i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-5 bg-light-subtle d-none" id="viewEdit">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-12 text-end">
                                    <button type="button" className="btn btn-danger" onClick={ this.handleCancel }> Cancelar <i class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="name" value={this.state.name} onChange={this.onChangeName}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Apellido:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="surname" value={this.state.surname} onChange={this.onChangeSurname}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero pasaporte:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="passport_number" value={this.state.passport_number} onChange={this.onChangeNumber}></input>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha Expiracion:&nbsp;</label>
                                        <input className="fst-italic mt-1 form-control" id="passport_expiration" value={this.state.passport_expiration} onChange={this.onChangeExpiration}></input>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="col">
                                            <label className="text-capitalize fw-bold">Nacionalidad:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="nationality" value={this.state.nationality} onChange={this.onChangeNationality}></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Pais emisor:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="country_emision" value={this.state.country_emision} onChange={this.onChangeCountry}></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                            <input className="fst-italic mt-1 form-control" id="accumulated_miles" value={this.state.accumulated_miles} onChange={ this.onChangeMiles }></input>
                                        </div>
                                        <div className="col">
                                            <label className="text-capitalize fw-bold">Equipaje:&#160;</label>
                                            <input className="fst-italic mt-1 form-control" id="luggage" value={this.state.luggage} onChange={ this.onChangeLuggage }></input>
                                        </div>
                                                                    
                                    </div>
                                    
                                        <button type="button" id="saveButton" className="btn btn-success mt-3" onClick={ this.handlePutEdit }> Guardar &#160; <i class="fa-solid fa-save"></i></button>
                                    
                            </div>                           

                        </div>
                    </div>
                </div>  
            </div>         
        );
    }
 
                                    
}