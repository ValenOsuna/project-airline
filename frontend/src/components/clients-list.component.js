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
                document.getElementById('data').innerText = response.data.nationality;
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
                <div className="col-md-9 mb-3" id="data">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <h4>Datos del Usuario:</h4>
                            <hr/>
                            <div id="data"></div>
                        </div>
                    </div>
                </div>  
            </div>         
        );
    }

    
}