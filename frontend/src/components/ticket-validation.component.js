import React, { Component } from "react";
import TicketDataServices from "../services/tickets.services"; 
import TicketView from "./ticket-view.component";
import AlertMessage from "./alert-view.component";

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
            step:1,
            alertData: {
                "visible": false,
                "type": "",
                "message": ""}
    }

    
    }

    PostTicket(){
        this.setState({
            alertData: {
                "visible": false,
                "type": "",
                "message": ""}
        });

        const clientData = {
            "reservation_number": this.state.SaleNumber,
            "passport_number": this.state.passport_number,
            "visa_check": this.state.visaCheck
        };
        
       
        TicketDataServices.create(clientData)
        
        .then(response => {
            if (!response.data.error){
                console.log("Ticket creado:", response.data);
                this.setState({TicketData : response.data, step: this.state.step + 1})

                
            }
            else{
                this.setState({
                    alertData: {
                        "visible": true,
                        "type": "danger",
                        "message": response.data.error}
                });
            }
            
           
            
        })
        .catch(e => {
            this.setState({
                alertData: {
                    "visible": true,
                    "type": "danger",
                    "message": "Error al comunicarse con el backend"}
            });
                
            
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
                
            <div className="card mt-5 bg-light-subtle">
                <div className="col-3 end-0 z-0 position-absolute"> 
                    <AlertMessage 
                        message= {this.state.alertData.message}
                        type= {this.state.alertData.type}
                        visible= {this.state.alertData.visible}
                    />
                </div>
                <div className="card-body">
                    <h4>Emision De Ticket:</h4>
                    <div className="row">
                        <div className="col-md-6">
                        <div class="col mt-3">
                                <label className="text-capitalize fw-bold">numero pasaporte:&nbsp;</label>
                                <input className="fst-italic mt-1 form-control" id="passport_number" value={this.state.passport_number} onChange={this.onChangePasportNumber} required></input>

                            </div>
                            <div class="col mt-3">
                                <label className="text-capitalize fw-bold">numero de venta:&nbsp;</label>
                                <input className="fst-italic mt-1 form-control" id="SaleNumber" value={this.state.airline} onChange={this.onChangeSaleNumber} maxlength="6" required></input>
                            </div>

                            <div class="col mt-3">
                                <label class="form-check-label text-capitalize fw-bold" > ¿Cuenta con Visa? </label>
                                <input type="checkbox" class="form-check-input" onClick={this.onChangeVisaCheck}></input>
                            </div>

                            <button type="button" className="btn btn-success mt-3" onClick={ this.PostTicket}>Emitir boleto</button>
                           

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