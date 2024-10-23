import React, { Component } from "react";
import FlightDataService from "../services/flight.services";


export default class FlightList extends Component{ 

    constructor(props){
        super(props);
        this.getFlight = this.getFlight.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getFlight(){
        var id_flight = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        FlightDataService.get(id_flight)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('airplane').innerText = response.data.airplane;
                document.getElementById('boarding_time').innerText = response.data.boarding_time;
                document.getElementById('departure_time').innerText = response.data.departure_time;
                document.getElementById('destination').innerText = response.data.destination;
                document.getElementById('origin').innerText = response.data.origin;
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

    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <form cl>
                                <div className="mb-3">
                                    <label className="form-label"><h4>ID Vuelo</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getFlight }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Avion:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airplane"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Abordaje:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="boarding_time"></span>
                                    </div>
                                    
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Despegue:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="departure_time"></span>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Destino:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="destination"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Origen:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="origin"></span>
                                    </div>
                                    
                       
                                </div>

                              
                            </div>                           

                        </div>
                    </div>
                </div>  
            </div>         
        );
    }
 
                                    
}