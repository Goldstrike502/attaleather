import React from 'react';
import './Workshops.css';

export class Workshops extends React.Component {

    render() {
        return (

            <div className="content">
                <h1>Workshops</h1>
                <section>
                    <h2>Werken met leer moet je leren</h2>

                    <p><strong>Echt. Dat moet je doen. Waarom? Om je eigen schoenen te maken? Daar zijn toch
                        schoenmakers voor?</strong>
                        <br />
                        Klopt. Ik ben er zelf een. En ik heb gemerkt wat werken met leer betekent. Je werkt met een
                        natuurproduct, en je maakt er iets van wat helemaal naar jouw eigen (voet)vorm en smaak is.
                        <br />
                        Hoe bijzonder dat is, kun je alleen ontdekken als je het gedaan hebt. Dat kan bij ATTA. In
                        workshops
                        van een paar uur. Waarin je niet alleen leert met leer om te gaan, maar waar je ook wegloopt met
                        jouw unieke creatie.
                        <br /><br />
                        Overigens, je kunt natuurlijk aansluiten bij een van de geplande workshops, maar als je met een
                        paar
                        vriendinnen iets bijzonders wil doen, kunnen we natuurlijk een datum regelen.</p>
                </section>
                <div className="workshop">
                    <header>
                        <h2>Titel</h2>
                    </header>
                    <div className="workshop-content">
                        <img src="/img/espadrilles_klein.jpg" alt="schoen"/>
                        <p>
                            Minimaal 2, maximaal 4 deelnemers<br />
                            Duur: ca. 6 uur<br />
                            Kosten: $115,00 inc. BTW en materiaal
                        </p>
                    </div>
                </div>
            </div>
        )


    }
}
