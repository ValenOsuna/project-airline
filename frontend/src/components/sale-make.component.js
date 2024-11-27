import React, { Component, useState } from "react";


export default class SaleMake extends Component{
    constructor(props){
        super(props);
        this.state = {
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
    
    render() {
        return (
            <div className="row">
                <form >
                    {this.state.step === 1 && (
                        <div className="mb-3">
                        <label className="form-label"><h4>ID Cliente</h4></label>
                        <input type="text" className="form-control bg-light-subtle" id="id" value={ this.state.id} onChange={this.onChangeId} />
                    </div>
                    )}
                    <button type="button" className="btn btn-success" onClick={ this.getClient }> Buscar </button>
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