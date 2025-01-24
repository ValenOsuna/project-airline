import React, {} from "react";

const Resume = ({ formData }) => {
    return(
<div className="card mt-5 bg-light-subtle" id="viewSale">
<div className="card-body">
    <h4>Datos de la Venta:</h4>
    <div className="row">
        <div className="col-md-6">
            <div className="col">
                <label className="text-capitalize fw-bold">Millas acumuladas:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.accumulated_miles}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Tarifa:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.fare}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.flight}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Fecha trámite:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.issue_date}</span>
            </div>
        </div>
        <div className="col-md-6">
            <div className="col">
                <label className="text-capitalize fw-bold">Información pasajero:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.passenger_data}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Medio de pago:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.pay_method}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Precio:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.price}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Número de reserva:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.reservation_number}</span>
            </div>
            <div className="col">
                <label className="text-capitalize fw-bold">Equipaje:&nbsp;</label>
                <span className="fst-italic mt-1">{formData.luggage}</span>
            </div>
        </div>
    </div>
</div>
</div>)};

export default Resume;