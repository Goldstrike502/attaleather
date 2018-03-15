import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {NavItem} from "./NavItem";
import {Home} from "./Home";
import {Portfolio} from "./Portfolio";
import {Latenmaken} from "./Latenmaken";
import {Workshops} from "./Workshops";
import {createClient} from 'contentful';
import {Footer} from "./Footer";
export const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'q8xxvl5loc88',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '5b0e53928c30ef395706e76a9e722baddab2dc1a9b863806956844d5f7c1e851'
})

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
                    <Route exact path="/workshops" component={Workshops}/>
                    <Footer />
                </div>
            </Router>
        );
    }
}


export default App;
