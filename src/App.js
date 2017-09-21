import React, { Component } from 'react';
import './App.css';
import {FeatureCard} from "./FeatureCard";
import {NavItem} from "./NavItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img className="logo" src="img/logo.png" alt="logo"/>
        </div>
          <nav>
            <NavItem title="home" url="/"/>
            <NavItem title="wat is atta?" url="/"/>
            <NavItem title="portfolio" url="/"/>
          </nav>
          <div className="Feature-list">
              <FeatureCard image="/img/uploads/latenmaken.JPG"
                           titel="Laten maken"
                           content="Voor grote en kleine voeten en alles daartussen in, maak ik op maat gemaakte unieke schoenen die ik samen met jou ontwerp!" />
              <FeatureCard image="/img/uploads/lerenmaken.JPG"
                           titel="Leren maken"
                           content="Inspirerende workshops waar je je eigen unieke en op maat gemaakte schoenen leert maken." />
              <FeatureCard image="/img/uploads/projecten.JPG"
                           titel="Projecten"
                           content="Regelmatig komen er bijzondere projecten met of zonder samenwerkingspartners voorbij." />
          </div>
      </div>
    );
  }
}


export default App;
