import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';

// const App = () =>  <PortfolioContainer />

class App extends Component {

  render () {
      return(
        <Router>
          <div>
            <Route path={process.env.PUBLIC_URL + '/'} render={() => <PortfolioContainer />}  />
          </div>
        </Router>
      )
  }
  
}
  
export default App;
