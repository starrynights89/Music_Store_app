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
    const style = {
      base: {
        'fontSize': '20px',
        'color': '#495057',
        'fontFamily': 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    };
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
    return (
      <div>
        {usersavedcard}
        <h5 className="mb-4">Payment Info</h5>
        <form>
          <div className="form-row">
            <div className="col-lg-12 form-group">
              <label htmlFor="cc-name">Name On Card:</label>
              <input id="cc-name" name='cc-name' className="form-control" placeholder='Name on Card'
                onChange={this.handleInputChange} type='text' />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-12 form-group">
              <label htmlFor="card">Card Information:</label>
              <CardElement id="card" className="form-control" style={style} />
            </div> 
          </div>
          {remembercardcheck}
          <hr className="mb-4" />
          <button type="submit" className="btn btn-success btn-large">{this.props.operation}</button>
        </form>
      </div>
    );
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