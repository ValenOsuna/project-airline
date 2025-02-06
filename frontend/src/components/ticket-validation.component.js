import React, { Component } from "react";
import TicketDataServices from "../services/tickets.services"; 
import TicketView from "./ticket-view.component";

export default class TicketValidation extends Component{ 

    constructor(props){
        super(props);
        this.onChangeVisaCheck = this.onChangeVisaCheck.bind(this);
        this.onChangePasportNumber = this.onChangePasportNumber.bind(this);
        this.onChangeSaleNumber = this.onChangeSaleNumber.bind(this);
        this.PostTicket = this.PostTicket.bind(this);
        this.state = {
    
            visaCheck:false,
            passport_number:null,
            SaleNumber:null,
            TicketData:[],
            step:1
        };
    }

    PostTicket(){
        const clientData = {"reservation_number": this.state.SaleNumber,
            "passport_number": this.state.passport_number,
            "visa_check": this.state.visaCheck
        };
        
        console.log(clientData)
        TicketDataServices.create(clientData)
        
        .then(response => {
            console.log("Ticket creado:", response.data);
            this.setState({TicketData : response.data, step: this.state.step + 1})
           
            
        })
        .catch(e => {
            console.log(e)
            alert(`Error en: ${e}`);
        });
    }

    onChangePasportNumber(e){
        this.setState({
            passport_number: e.target.value
        });
    }

    onChangeSaleNumber(e){
        this.setState({
            SaleNumber: e.target.value
        });
    }

    onChangeVisaCheck(e){
        if (!this.state.visaCheck){
        this.setState({
            visaCheck: true
            });
        }
        else {this.setState({
            visaCheck: false
                });
        }

    }

    render(){
        return (
            <div>
            {this.state.step === 1 && (
            <div className="card mt-5 bg-light-subtle" id="viewEdit">
                <div className="card-body">
                    <h4>Emision De Ticket:</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col">
                                <label className="text-capitalize fw-bold">numero pasaporte:&nbsp;</label>
                                <input className="fst-italic mt-1 form-control" id="passport_number" value={this.state.passport_number} onChange={this.onChangePasportNumber} required></input>
                            </div>
                            <div className="col">
                                <label className="text-capitalize fw-bold">numero de venta:&nbsp;</label>
                                <input className="fst-italic mt-1 form-control" id="SaleNumber" value={this.state.airline} onChange={this.onChangeSaleNumber} maxlength="6" required></input>
                            </div>
                            <div class="col">
                            <label class="form-check-label" for="exampleCheck1">Check me out </label>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={this.onChangeVisaCheck}></input>
                            </div>
                            <button type="button" className="btn btn-success" onClick={ this.PostTicket}>Crear</button>
                           
                        </div>
                    </div>                           
                </div>
            </div>)}
            {this.state.step === 2 && (
            <TicketView    listTickets={this.state.TicketData} />
            )}
            </div>
            );
        }
    }