import React, { Component, } from "react";
import AirportDataService from "../services/airport.services"; 


export default class AirportList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getAirport() {
       
        AirportDataService.getAirport()
            .then(response => {
                
                this.setState({data: response.data}); 
                console.log(this.state.data)
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount(){
        this.getAirport()
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
                                        <th className="text-capitalize">Ciudad</th>
                                        <th className="text-capitalize">Pais</th>
                                        <th className="text-capitalize">Siglas</th>
                                        <th className="text-capitalize">Puertas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {this.state.data.map((airport) => (
                                    <tr key={airport.id} className="text-capitalize">
                                    <td>{airport.id}</td>
                                    <td>{airport.city}</td>
                                    <td>{airport.country}</td>
                                    <td>{airport.acronym}</td>
                                    <td>{airport.gates}</td>
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