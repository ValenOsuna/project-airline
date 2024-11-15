import React, { Component, } from "react";
import ClientDataServices from "../services/clients.services"; 


export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getClient() {
       
        ClientDataServices.getClient()
            .then(response => {
                
                this.setState({data: response.data}); 
                console.log(this.state.data)
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount(){
        this.getClient()
    }

   
    render() {
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <table class="table table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th className="text-capitalize">Id</th>
                                        <th className="text-capitalize">Nombre</th>
                                        <th className="text-capitalize">Apellido</th>
                                        <th className="text-capitalize">Numero Pasaporte</th>
                                        <th className="text-capitalize">Fecha Expirecion</th>
                                        <th className="text-capitalize">Nacionalidad</th>
                                        <th className="text-capitalize">Millas Acumuladas</th>
                                        <th className="text-capitalize">Pais Emisor</th>
                                        <th className="text-capitalize">Equipaje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {this.state.data.map((client) => (
                                    <tr key={client.id} className="text-capitalize">
                                    <td>{client.id}</td>
                                    <td>{client.name}</td>
                                    <td>{client.surname}</td>
                                    <td>{client.passport_number}</td>
                                    <td>{client.passport_expiration}</td>
                                    <td>{client.nationality}</td>
                                    <td>{client.accumulated_miles}</td>
                                    <td>{client.country_emision}</td>
                                    <td>{client.luggage}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}