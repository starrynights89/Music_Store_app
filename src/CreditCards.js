import React from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'react-stripe-elements';

const INITIALSTATE = "INITIAL", SUCCESSSTATE = "COMPLETE", FAILEDSTATE = "FAILED";

// Child component
class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  renderCreditCardInformation() {}
  renderSuccess() {}
  renderFailure() {}
}