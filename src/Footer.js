/**
 * Created by Goldstrike on 15-3-2018.
 */
import React from 'react';
import './Footer.css';

export class Footer extends React.Component {

    render() {
        return (<div id="footer">
            <div className="coll"><i className="material-icons">location_city</i>De Stadstuin Europalaan 20<br /> 3526 KS Utrecht</div>
            <div className="coll"><i className="material-icons">email</i>info@attaleather.nl</div>
            <div className="coll"><i className="material-icons">phone</i>06-55128590</div>
            </div>);
    }
}