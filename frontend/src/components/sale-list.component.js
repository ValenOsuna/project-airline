import React, { Component } from "react";
import SaleDataService from "../services/sale.services";


export default class SaleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        };
    }

    getSales() {
       
        SaleDataService.getSales()
            .then(response => {
                
                this.setState({data: response.data}); 
                console.log(this.state.data)
            })
            .catch(e => {
                console.log(e);
            });

        
    }

    componentDidMount(){
        this.getSales()
    }

   
    render() {
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mt-5 bg-light-subtle">
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-capitalize">id</th>
                                        <th className="text-capitalize">Fecha tramite</th>
                                        <th className="text-capitalize">Numero reserva</th>
                                        <th className="text-capitalize">Metodo pago</th>
                                        <th className="text-capitalize">Millas acumuladas</th>
                                        <th className="text-capitalize">Tarifa</th>
                                        <th className="text-capitalize">Precio</th>
                                        <th className="text-capitalize">Venta</th>
                                        <th className="text-capitalize">Equipaje</th>
                                        <th className="text-capitalize">Pasajero</th>
                                        <th className="text-capitalize">Asiento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {this.state.data.map((sale) => (
                                    <tr key={sale.id} className="text-capitalize">
                                    <td>{sale.id}</td>
                                    <td>{sale.issue_date}</td>
                                    <td>{sale.reservation_number}</td>
                                    <td>{sale.pay_method}</td>
                                    <td>{sale.accumulated_miles}</td>
                                    <td>{sale.fare}</td>
                                    <td>{sale.price}</td>
                                    <td>{sale.sale}</td>
                                    <td>{sale.luggage}</td>
                                    <td>{sale.passenger_data}</td>
                                    <td>{sale.seat_data}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


