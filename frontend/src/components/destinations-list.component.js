import React, { Component } from "react";
import DestinationDataServices from "../services/destinations.services";


export default class DestinationSearch extends Component{

    constructor(props){
        super(props);
        this.getDestination = this.getDestination.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getDestination(){
        var id_destination = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        DestinationDataServices.get(id_destination)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('name').innerText = response.data.name;
                document.getElementById('requiered_visa').innerText = response.data.requiered_visa;
                document.getElementById('airport').innerText = response.data.airports
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
                                    <label className="form-label"><h4>ID Destino</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getDestination }>Buscar</button>
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
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Visa Requerida:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="requiered_visa"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aeropuerto:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airport"></span>
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