import React, { Component } from "react";
import ClientDataServices from "../services/clients.services";


export default class SaleMake extends Component{
    constructor(props){
        super(props);
        this.getClient = this.getClient.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.state = {
          id: null,
          data: null,
          name: null,
          surname: null,
          passport_number: null,
          step: 1,
          formData: {}
        }
    }

    handleNext() {
        this.state.step = this.state.step +1;
      };

    onChangeId(event){
        this.setState({
            id: event.target.value
        });
    }
    
    handlePrevious() {
        this.state.step = this.state.step -1;
      };
    
    handleInputChange(event){
      };
    
    handleSubmit(event){
        event.preventDefault();
        // handle form submission
    };
    getClient(){
      var id_client = this.state.id
      //var content = " "
      //const [content, setcontent ] = useState(' ');
      ClientDataServices.get(id_client)
          .then(response => {
              console.log (response.data);
              this.state.id = response.data.id;
              this.setState({
                  id: response.data.id,
                  name: response.data.name,
                  surname: response.data.surname,
                  passport_number: response.data.passport_number
              });
              
          })
          .catch(e => {
              console.log(e);
          });
  }
    
    render() {
        return (
            <div className="row">
                <form >
                    {this.state.step === 1 && (
                        <div className="mb-3">
                        <label className="form-label"><h4>ID Cliente</h4></label>
                        <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                        <div className="mb-3"></div>
                                <button type="button" className="btn btn-success" onClick={ this.getClient }> Buscar </button>
                                <div className="mb-3"></div>
                                <div className="col-md-6">
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Nombre:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="name">{ this.state.name }</span>
                                    </div>
                                    <div className="mb-3"></div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Apellido:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="surname">{ this.state.surname }</span>
                                    </div>
                                    <div className="mb-3"></div>
                                    <div className="col">
                                        <label className="text-capitalize fw-bold">Numero pasaporte:&nbsp;</label>
                                        <span className="fst-italic mt-1" id="passport_number">{ this.state.passport_number }</span>
                                    </div>
                    </div>
                    </div>
                    )}
                </form>
            {/*<ProgressBar now={(step / 3) * 100} />
            <div className="d-flex justify-content-between">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>*/}
          </div>

        )
    };
}