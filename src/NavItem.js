import React, { Component } from 'react';
import './NavItem.css';
export class NavItem extends Component {
    render() {
        return (
            <li className="Nav-item"><a href={this.props.url}>{this.props.title}</a></li>
        );
    }
}