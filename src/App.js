import React from 'react';
import CardContainer from './ProductCards';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Navigation';
//import { BuyModalWindow } from './modalwindows';
import About from './About';

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
            <Nav user={this.state.user} showModalWindow={this.showSignInModalWindow}/>
            <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json'
                showBuyModal={this.showBuyModalWindow} />} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;