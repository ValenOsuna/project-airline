import React, { Component } from "react";
import FlightDataService from "../services/flight.services";



export default class RootView extends Component {
    constructor(props) {
        super(props);
        this.getFlights = this.getFlights.bind(this)
        this.state = {
            data: []
        };
    }

    getFlights(e) {
        
        
        FlightDataService.getFlights(new Date().toJSON().slice(0, 10) ,)
            .then(response => {
                
                
                this.setState({data: response.data}); 
                console.log(this.state.flightDate)
                
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount() {
        this.getFlights();
      }

   
   
    render() {
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">

                        <label className="text-capitalize fw-bold mb-3">
                          <h3>Vuelos hoy :&nbsp;</h3>
                        </label>

                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-capitalize h5">#</th>
                                        <th className="text-capitalize h5">Destino</th>
                                        <th className="text-capitalize h5">Origen</th>
                                        <th className="text-capitalize h5">Hora despegue</th>
                                        <th className="text-capitalize h5">Hora abordaje</th>
                                        <th className="text-capitalize h5">Avión</th>
                                        <th className="text-capitalize h5">Terminal</th>
                                        <th className="text-capitalize h5">Puerta</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                 {this.state.data.map((flight) => (
                                    <tr key={flight.id} className="text-capitalize">
                                    <td>{flight.id}</td>
                                    <td>{flight.destination}</td>
                                    <td>{flight.origin}</td>
                                    <td>{flight.departure_time}</td>
                                    <td>{flight.boarding_time}</td>
                                    <td>{flight.airplaneModel}</td>
                                    <td>{flight.terminal}</td>
                                    <td>{flight.gate}</td>
                                    
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
