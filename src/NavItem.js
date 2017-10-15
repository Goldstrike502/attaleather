import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavItem.css';
export class NavItem extends Component {
    render() {
        return (
            <li className="Nav-item"><Link to={this.props.to} activeClassName="active">{this.props.title}</Link></li>
        );
    }
}