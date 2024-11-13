import React, { Component } from "react";
import FlightDataService from "../services/flight.services";

export default class FlightSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getFlights() {
       
        FlightDataService.getfligths()
            .then(response => {
                
                this.setState({data: response.data}); 
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { flights } = this.state.data;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-capitalize">id</th>
                                        <th className="text-capitalize">destination</th>
                                        <th className="text-capitalize">origin</th>
                                        <th className="text-capitalize">departure_time</th>
                                        <th className="text-capitalize">boarding_time</th>
                                        <th className="text-capitalize">airplane</th>
                                        <th className="text-capitalize">terminal</th>
                                        <th className="text-capitalize">group</th>
                                        <th className="text-capitalize">gate</th>
                                        <th className="text-capitalize">ro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {flights.map((flight) => (
                                    <tr key={flight.id} className="text-capitalize">
                                    <td>{flight.id}</td>
                                    <td>{flight.destination}</td>
                                    <td>{flight.origin}</td>
                                    <td>{flight.departure_time}</td>
                                    <td>{flight.boarding_time}</td>
                                    <td>{flight.airplane}</td>
                                    <td>{flight.terminal}</td>
                                    <td>{flight.group}</td>
                                    <td>{flight.gate}</td>
                                    <td>{flight.row}</td>
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
