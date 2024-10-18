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

            <div className="container mt-3">
                <div className="col-md-2">
                <form>
                    <div className="mb-3">
                    <label className="form-label">Id del Cliente</label>
                    <input type="text" className="form-control" id="id" value={ this.state.id} onChange={this.onChangeId} />
                    <div id="emailHelp" className="form-text"></div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={ this.getClient }>Buscar</button>
                </form>
                </div>
                
                <div className="mb-3 col-md-4" id="data">
                    datos:
                </div>
            </div>
        );
    }

    
}