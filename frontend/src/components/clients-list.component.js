import React, { Component } from "react";
import ClientDataServices from "../services/clients.services"; 


export default class ClientList extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            getClient: null
        };
    }
    
    getClient(){
        ClientDataServices.get()
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        const { getClient } = this.state;
        return (<button
            className= "btn"
            type = "button"
            onClick= {this.getClient}>
                buscar
        </button>);
    }

    
}