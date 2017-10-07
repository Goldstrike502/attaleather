import React from 'react';
import {FeatureCard} from "./FeatureCard";

export class Home extends React.Component {
  render() {
    return (
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
    )
  }
} 