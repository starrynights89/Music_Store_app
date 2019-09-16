import React from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'react-stripe-elements';

const INITIALSTATE = 'INITIAL', 
  SUCCESSSTATE = 'COMPLETE', 
  FAILEDSTATE = 'FAILED';

// Child component
class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: INITIALSTATE
    };    
  }

  renderCreditCardInformation() {
    const usersavedcard = <div>
      <div className="form-row text-center">
        <button type="button" className="btn btn-outline-success text-center mx-auto">Use saved card?</button>
      </div>
      <hr />
    </div>;

    const remembercardcheck = <div className="form-row form-check text-center">
      <input className="form-check-input" type="checkbox" value="" id="remembercardcheck" />
      <label className="form-check-label" htmlFor="remembercardcheck">
        Remember Card?
      </label>
    </div>;
    // return the view
  }
  
  renderSuccess() {}
  renderFailure() {}

  render() {
    let body = null;
    switch (this.state.status) {
    case SUCCESSSTATE:
      body = this.renderSuccess();
      break;
    case FAILEDSTATE:
      body = this.renderFailure();
      break;
    default:
      body = this.renderCreditCardInformation();
    }
    
    return (
      <div>
        {body}
      </div>
    );
  }
}