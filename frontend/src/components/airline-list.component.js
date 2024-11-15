import React, { Component } from "react";
import AirlinetDataService from "../services/airline.services";


export default class Airlinelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getAirline() {
       
        AirlinetDataService.getAirline()
            .then(response => {
                
                this.setState({data: response.data}); 
                console.log(this.state.data)
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount(){
        this.getAirline()
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
                                        <th className="text-capitalize">id</th>
                                        <th className="text-capitalize">Nombre</th>
                                        <th className="text-capitalize">Siglas</th>
                                        <th className="text-capitalize">lista vuelo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {this.state.data.map((airline) => (
                                    <tr key={airline.id} className="text-capitalize">
                                    <td>{airline.id}</td>
                                    <td>{airline.name}</td>
                                    <td>{airline.acronym}</td>
                                    <td>{airline.flight_list}</td>                                    </tr>
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
