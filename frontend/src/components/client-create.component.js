import React, { Component } from "react";
import ClientDataServices from "../services/clients.services"; 


export default class ClientCreate extends Component{ 

    constructor(props){
        super(props);
        this.PostClient = this.PostClient.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeExpiration = this.onChangeExpiration.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeMiles = this.onChangeMiles.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeLuggage = this.onChangeLuggage.bind(this);
        this.state = {
    
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

    PostClient(){
        const clientData = {
            name: this.state.name,
            surname: this.state.surname,
            passport_number: this.state.passport_number,
            passport_expiration: this.state.passport_expiration,
            nationality: this.state.nationality,
            accumulated_miles: this.state.accumulated_miles,
            country_emision: this.state.country_emision,
            luggage: this.state.luggage
        };
        
        console.log(clientData)
        ClientDataServices.create(clientData)
        
        .then(response => {
            console.log("Cliente creado:", response.data);
            
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
                                    <label className="form-label"><h4>Apellido</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" surname="surname" value={ this.state.surname} onChange={this.onChangeSurname}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Millas acumuladas</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="accumulated_miles" value={ this.state.accumulated_miles} onChange={this.onChangeMiles} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Equipaje</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="luggage" value={ this.state.luggage} onChange={this.onChangeLuggage} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Numero pasaporte</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="passport_number" value={ this.state.passport_number} onChange={this.onChangeNumber} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Vencimiento pasaporte</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="passport_expiration" value={ this.state.passport_expiration} onChange={this.onChangeExpiration} />
                                </div>
                                
                                

                                <div className="mb-3">
                                    <label className="form-label"><h4>Nacionalidad</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="nationality" value={ this.state.nationality} onChange={this.onChangeNationality} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Pais Emisor</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="country_emision" value={ this.state.country_emision} onChange={this.onChangeCountry} />
                                
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.PostClient}>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}
