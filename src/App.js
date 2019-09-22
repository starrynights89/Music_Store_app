import React from 'react';
import CardContainer from './ProductCards';
import Nav from './Navigation';
import { SignInModalWindow, BuyModalWindow } from './modalwindows';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Orders from './orders';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        loggedin: false,
        name: '',
      }
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav user={this.state.user} />
            <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json' />} />
              <Route path="/promos" render={() => <CardContainer location='promos.json' promo={true} />} />
              {
                this.state.user.loggedin ? <Router path="/myorders" render={() => <Orders location='user.json' />} />
                  : null
              }
              <Route path="/about" component={About} />
            </div>
            <SignInModalWindow />
            <BuyModalWindow />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;