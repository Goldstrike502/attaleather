import React, { Component } from 'react';
import './FeatureCard.css';
export class FeatureCard extends Component {
    render() {
        return (
            <div className="Feature-card">
                <img src={this.props.image} />
                <h1>{this.props.titel}</h1>
                <p>{this.props.content}</p>
                <hr />
                <a>Meer informatie</a>
            </div>
        )
    }
}