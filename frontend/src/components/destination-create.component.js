import React, { Component } from "react";
import DestinationDataServices from "../services/destinations.services"; 


export default class DestinationCreate extends Component{ 

    constructor(props){
        super(props);
        this.PostDestination = this.PostDestination.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRequiered_visa = this.onChangeRequiered_visa.bind(this);
        this.onChangeAirport = this.onChangeAirport.bind(this);
        this.state = {
    
            name: null,
            requiered_visa: null,
            airport: null,
            data: []
        };
    }

    PostDestination(){
        const clientData = {
            name: this.state.name,
            requiered_visa: this.state.requiered_visa,
            airport: this.state.airport,
        };
        
        console.log(clientData)
        DestinationDataServices.create(clientData)
        
        .then(response => {
            console.log("Destino creado:", response.data);
            
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

    onChangeRequiered_visa(e){
        this.setState({
            requiered_visa: e.target.value
        });
    }

    onChangeAirport(e){
        this.setState({
            airport: e.target.value
        });
    }

    getDestination() {
        
        
        DestinationDataServices.getDestinations()
            .then(response => {
                
                
                this.setState({data: response.data}); 
                console.log(response.data)
                
            })
            .catch(e => {
                console.log(e);
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
                                    <label className="form-label"><h4>Visa Requerida</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" requiered_visa="requiered_visa" value={ this.state.requiered_visa} onChange={this.onChangeRequiered_visa}  />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label"><h4>Aeropuerto</h4></label> 
                                    {this.state.data.map((destination) => (
                                    <select  className="text-capitalize">
                                    <option key={destination.id}>{destination.id}</option>
                                    <option key={destination.id}>holis</option>
                                    </select>
                                ))}
                                </div>

                                <button type="button" className="btn btn-success" onClick={ this.PostDestination }>Crear</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>       
                
        );
    }
}
