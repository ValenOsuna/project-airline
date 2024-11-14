import React, { Component } from "react";
import DestinationsDataService from "../services/destinations.services";


export default class DestinationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getDestinations() {
       
        DestinationsDataService.getDestinations()
            .then(response => {
                
                this.setState({data: response.data}); 
                console.log(this.state.data)
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount(){
        this.getDestinations()
    }

   
    render() {
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-capitalize">id</th>
                                        <th className="text-capitalize">Nombre</th>
                                        <th className="text-capitalize">Requiere Visa</th>
                                        <th className="text-capitalize">Aeropuerto</th>
                                    </tr>
                                </thead>

                                <tbody>
                                 {this.state.data.map((destination) => (
                                    <tr key={destination.id} className="text-capitalize">
                                    <td>{destination.id}</td>
                                    <td>{destination.name}</td>
                                    <td>{destination.requiered_visa}</td>
                                    <td>{destination.airport}</td>
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


