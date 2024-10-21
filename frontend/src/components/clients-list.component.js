import React, { Component } from "react";
import ClientDataServices from "../services/clients.services"; 


export default class ClientList extends Component{ 

    constructor(props){
        super(props);
        this.getClient = this.getClient.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getClient(){
        var id_client = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        ClientDataServices.get(id_client)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('dataName').innerText = response.data.name;
                document.getElementById('dataSurname').innerText = response.data.surname;
                document.getElementById('dataPassport_number').innerText = response.data.passport_number;
                document.getElementById('dataPassport_expiration').innerText = response.data.passport_expiration;
                document.getElementById('dataNationality').innerText = response.data.nationality;
                document.getElementById('dataAccumulated_Miles').innerText = response.data.accumulated_miles;
                document.getElementById('dataCountry_emision').innerText = response.data.country_emision;
                document.getElementById('dataLuggage').innerText = response.data.luggage;
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
                                    <label className="form-label"><h4>ID Cliente</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getClient }>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>


                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    
                                    <th scope="col">name</th>
                                    <th scope="col">surname</th>
                                    <th scope="col">passport number</th>
                                    <th scope="col">passport expiration</th>
                                    <th scope="col">nationality</th>
                                    <th scope="col">accummulated milles</th>
                                    <th scope="col">country emission</th>
                                    <th scope="col">luggage </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    
                                    <td id = "dataName" class="table-primary"> </td>
                                    <td id = "dataSurname" class="table-secondary"> </td>
                                    <td id = "dataPassport_number" class="table-success"> </td>
                                    <td id = "dataPassport_expiration" class = "table-danger"> </td> 
                                    <td id = "dataNationality" class = "table-warning"> </td>
                                    <td id = "dataAccumulated_Miles" class="table-info"> </td>
                                    <td id = "dataCountry_emision" class="table-light" > </td>
                                    <td id = "dataLuggage" class="table-primary" > </td>
                                    
                                    </tr>
                                    
                                </tbody>
                                <a href="https://es.wikipedia.org/wiki/LGBT">PRIDE</a>
                            </table>
                            <hr/>
                            

                        </div>
                    </div>
                </div>  
            </div>         
        );
    }

    
}