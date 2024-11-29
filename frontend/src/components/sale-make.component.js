import React, { Component } from "react";
import ClientDataServices from "../services/clients.services";

export default class SaleMake extends Component {
  constructor(props) {
    super(props);
    this.getClient = this.getClient.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: null,
      data: null,
      name: null,
      surname: null,
      passport_number: null,
      step: 1,
      formData: {},
    };
  }

  handleNext() {
    this.setState({
        step: this.state.step + 1
    })  
}

  onChangeId(event) {
    this.setState({
      id: event.target.value,
    });
  }

  handlePrevious() {
    this.setState({
        step: this.state.step - 1
    })  
  }

  handleInputChange(event) {}

  handleSubmit(event) {
    event.preventDefault();

  }
  getClient() {
    var id_client = this.state.id;
    
    ClientDataServices.get(id_client)
      .then((response) => {
        console.log(response.data);
        
        this.setState({
          id: response.data.id,
          name: response.data.name,
          surname: response.data.surname,
          passport_number: response.data.passport_number,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="col-md-4"></div>
          <div className="col-md-8 mb-3">
            <div className="card mt-5 bg-light-subtle" id="viewClient">
              <div className="card-body">
                {this.state.step === 1 && (
                  <div className="row">
                    <div className="mb-3">
                      <h6>Buscar Usuario:</h6>
                      <input
                        type="text"
                        className="form-control bg-light-subtle"
                        id="id"
                        value={this.state.id}
                        onChange={this.onChangeId}
                      />

                      <button
                        type="button"
                        className="btn btn-success mt-1"
                        onClick={this.getClient}
                      >
                        Buscar
                      </button>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Nombre:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="name">
                          {this.state.name}
                        </span>
                      </div>
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Apellido:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="surname">
                          {this.state.surname}
                        </span>
                      </div>
                      <div className="col">
                        <label className="text-capitalize fw-bold">
                          Numero pasaporte:&nbsp;
                        </label>
                        <span className="fst-italic mt-1" id="passport_number">
                          {this.state.passport_number}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-between">
                  {this.state.step > 1 && (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handlePrevious}
                    >
                      Previo
                    </button>
                  )}
                  {this.state.step < 3 ? (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handleNext}
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success mt-1"
                      onClick={this.handleSubmit}
                    >
                      Enviar
                    </button>
                  )}

                    {this.state.step === 2 && ("")}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
