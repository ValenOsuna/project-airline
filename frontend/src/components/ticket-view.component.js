import React from "react";


const TicketView = ({listTickets}) => {
    return (
            <div className="row">
                <div className="col-md-9 mb-3">
                    <div className="card mt-5 bg-light-subtle" id="viewTicket">
                        <div className="card-body">
                            <h4>Datos del Ticket:</h4>
                            {listTickets.map((data) => (
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Puerta:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="gate">{ data.gate }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Aerolinea:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="airline">{ data.airline }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Terminal:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="terminal">{ data.terminal }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Asiento:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="seat">{ data.seat }</span>
                                    </div>
                                        
                                </div>
                                <div className="col-md-6">
                                <div className="col">
                                        <label className="text-capitalize fw-bold">Grupo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="group">{ data.group }</span>
                                    </div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Vuelo:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="flight">{ data.flight }</span>
                                    </div>

                                </div>
                            </div>
                            ))}
                            </div>
                            </div>

                        </div>
                    </div>
                        
    );
};

export default TicketView;