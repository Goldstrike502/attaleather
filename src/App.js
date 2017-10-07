import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {NavItem} from "./NavItem";
import {Home} from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
              <img className="logo" src="img/logo.png" alt="logo"/>
          </div>
            <nav>
              <NavItem title="home" to="/"/>
              <NavItem title="wat is atta?" to="/wat-is-atta"/>
              <NavItem title="portfolio" to="/portfolio"/>
            </nav>

            <Route exact path="/" component={Home} />
            {/* 
            Hier boven link ik de URL (/) aan het component wat op dat moment getoond moet worden
            Voorbeeld voor andere pagina's:
            <Route path="/portfolio" component={PortfolioComponent}/> 
            
            zie voor overige voorbeelden:
            https://reacttraining.com/react-router/web/guides/quick-start
            */}
        </div>
      </Router>
    );
  }
}


export default App;
