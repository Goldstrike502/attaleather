import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavItem.css';
export class NavItem extends Component {
    render() {
        return (
            <li className="Nav-item"><Link to={this.props.to}>{this.props.title}</Link></li>
        );
    }
}