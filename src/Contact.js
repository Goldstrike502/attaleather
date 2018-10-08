import React from 'react';
import './Contact.css';

export class Contact extends React.Component {

    render() {
        return (
            <div>
                <h1><span>Contact</span></h1>
            <div className="contact">
                <form method="POST" action="https://formspree.io/info@attaleather.nl">
                    <input type="text" name="naam" placeholder="Uw naam" />
                    <input type="email" name="email" placeholder="Uw email adres" />
                    <textarea name="message" placeholder="Uw bericht" rows="15"></textarea>
                    <button type="submit">Verstuur</button>
                </form>
            </div>
            </div>
        )
    }
}