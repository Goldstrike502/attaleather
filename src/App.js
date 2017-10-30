import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {NavItem} from "./NavItem";
import {Home} from "./Home";
import {Portfolio} from "./Portfolio";
import {Latenmaken} from "./Latenmaken";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">

                        <div className="container">
                            <img className="logo" src="img/logo.png" alt="logo"/>
                            <nav>
                                <NavItem title="home" to="/" exact={true}/>
                                <NavItem title="laten maken" to="/laten-maken"/>
                                <NavItem title="workshops" to="/workshops"/>
                                <NavItem title="portfolio" to="/portfolio"/>
                                <navItem title="Agenda" to="agenda"/>
                                <NavItem title="contact" to="/contact"/>
                            </nav>
                        </div>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/laten-maken" component={Latenmaken}/>
                </div>
            </Router>
        );
    }
}


export default App;
