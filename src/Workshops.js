import React from 'react';
import './Workshops.css';
import 'react-tabs/style/react-tabs.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

export class Workshops extends React.Component {

    render() {
        return (

            <div className="content">
                <h1><span>Workshops</span></h1>
                <section>
                    <h2>Werken met leer moet je leren</h2>

                    <p><strong>Echt. Dat moet je doen. Waarom? Om je eigen schoenen te maken? <br></br>Daar zijn toch
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
                    <Tabs>
                        <TabList>
                            <Tab>
                                <header><h2>Lil'sneakers</h2></header>
                            </Tab>
                            <Tab>
                                <header><h2>Sneakerkit</h2></header>
                            </Tab>
                            <Tab>
                                <header><h2>Espadrilles</h2></header>
                            </Tab>
                            <Tab>
                                <header><h2>Clogs</h2></header>
                            </Tab>
                            <Tab>
                                <header><h2>Babyslofjes</h2></header>
                            </Tab>
                            <Tab>
                                <header><h2>Slippers</h2></header>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/lilsneaker.jpg" alt="lilsneaker"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 3 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>89,00 incl. BTW en materiaal</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Data 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>zaterdag 27 oktober</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/sneakers.jpg" alt="sneakers"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 6 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>179,00 incl. BTW en materiaal, exclusief lunch</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Data 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>zaterdag 14 oktober , zondag 17 november</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/espadrilles_klein.jpg" alt="espadrilles"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 7 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>129,00 incl. BTW en materiaal, exclusief lunch</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Data 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>Momenteel geen data beschikbaar</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/clogs_klein.jpg" alt="clogs"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 7 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>129,00 incl. BTW en materiaal, exclusief lunch</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Datum 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>Zondag 2 december</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/babyslofjes.jpg" alt="babyslofjes"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 3,5 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>49,00 incl. BTW en materiaal</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Datum 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>Zaterdag 10 november</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="workshop-content">
                                <img src="/img/slippers.jpg" alt="slippers"/>
                                <div className="tablecontainer">
                                    <table>
                                        <tr>
                                            <td><h3>Aantal deelnemers:</h3></td>
                                            <td><i className="material-icons">person_add</i></td>
                                            <td>Min 3, max 6 deelnemers</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Duur:</h3></td>
                                            <td><i className="material-icons">access_time</i></td>
                                            <td> ca. 7 uur</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Kosten:</h3></td>
                                            <td><i className="material-icons">euro_symbol</i></td>
                                            <td>129,00 incl. BTW en materiaal, exclusief lunch</td>
                                        </tr>
                                        <tr>
                                            <td><h3>Datum 2018:</h3></td>
                                            <td><i className="material-icons">date_range</i></td>
                                            <td>Zaterdag 20 oktober</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )


    }
}
