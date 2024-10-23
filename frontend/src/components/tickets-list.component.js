import React, { Component } from "react";
import TicketDataServices from "../services/tickets.services"; 


export default class TicketsList extends Component{ 

    constructor(props){
        super(props);
        this.getTicket = this.getTicket.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getTicket(){
        var id_tictek = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        TicketDataServices.get(id_tictek)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('gate').innerText = response.data.gate;
                document.getElementById('airline').innerText = response.data.airline;
                document.getElementById('terminal').innerText = response.data.terminal;
                document.getElementById('seat').innerText = response.data.seat;
                document.getElementById('group').innerText = response.data.group;
                document.getElementById('flight').innerText = response.data.flight;
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
                                    <label className="form-label"><h4>ID Ticket</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getTicket }>Buscar</button>
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
                                        <label className="text-capitalize fw-bold">Puerta:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="gate"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aerolinea:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airline"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Terminal:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="terminal"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Asiento:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="seat"></span>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Grupo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="group"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight"></span>
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