import React, { Component } from "react";
import SaleDataService from "../services/sale.services";


export default class SaleList extends Component{ 

    constructor(props){
        super(props);
        this.getSale = this.getSale.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
            id: null,
            data: null
        };
    }
    getSale(){
        var id_sale = this.state.id
        //var content = " "
        //const [content, setcontent ] = useState(' ');
        SaleDataService.get(id_sale)
            .then(response => {
                console.log (response.data);
                //setcontent(response.data);
                //document.getElementById('data').innerText = JSON.stringify(response.data);
                document.getElementById('accumulated_miles').innerText = response.data.accumulated_miles;
                document.getElementById('fare').innerText = response.data.fare;
                document.getElementById('flight').innerText = response.data.flight;
                document.getElementById('issue_date').innerText = response.data.issue_date;
                document.getElementById('luggage').innerText = response.data.luggage;
                document.getElementById('passenger_data').innerText = response.data.passenger_data;
                document.getElementById('pay_method').innerText = response.data.pay_method;
                document.getElementById('price').innerText = response.data.price;
                document.getElementById('reservation_number').innerText = response.data.reservation_number;
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
                                    <label className="form-label"><h4>ID Venta</h4></label>
                                    <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={ this.getSale }>Buscar</button>
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
                                        <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="accumulated_miles"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="fare"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Fecha tramite:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="issue_date"></span>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Informacion pasajero:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passenger_data"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Medio pago:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="pay_method"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Precio:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="price"></span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero reserva:&#160;</label>
                                        <span className="fst-italic mt-1" id="reservation_number"></span>
                                    </div>

                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Equipaje:&#160;</label>
                                        <span className="fst-italic mt-1" id="luggage"></span>
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