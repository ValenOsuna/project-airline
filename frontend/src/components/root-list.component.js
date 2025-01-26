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


                            <table className="table table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th className="text-capitalize">id</th>
                                        <th className="text-capitalize">Destino</th>
                                        <th className="text-capitalize">Origen</th>
                                        <th className="text-capitalize">Hora despegue</th>
                                        <th className="text-capitalize">Hora abordaje</th>
                                        <th className="text-capitalize">Avión</th>
                                        <th className="text-capitalize">Terminal</th>
                                        <th className="text-capitalize">Puerta</th>
                                        
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
