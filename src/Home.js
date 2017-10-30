import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

export class Home extends React.Component {
    render() {
        return (
<div className="Home">
    <div className="intro">
            <div className="bg-white">
                <section>
                    <h1><span>ATTA</span> is het leeratelier van Anita Hardeman, sinds 2016 gevestigd in de Stadstuin Utrecht.
                    </h1>
                    <p>Een Leeratelier, met leer in alle soorten en kleuren; onder andere op natuurlijke wijze gelooid en
                        gekleurd Ecopell leer. Én: een Leeratelier, waarin echt wat te leren valt. Anita leert zelf nog elke
                        dag. En deelt dat graag met jou, in leerzame workshops.</p>
                    <hr />
                    <br />
                </section>
            </div>
            <div className="bg-transparant call-to-action">
                <section>
                    <h1>Hoe kan ik je helpen?</h1>
                    <br />
                    <button><span>Leren</span> maken</button>
                    <Link to={"/laten-maken"}><button><span>Laten</span> maken</button></Link>
                </section>
            </div>
    </div>
            <div className="watisatta">
                <h1>Wat is <span>ATTA</span>?</h1>
                <section>
                    <img src="/img/Anita.png"/>
                        <p>
                        <br />
                        Een Leeratelier, met leer in alle soorten en kleuren; onder andere op natuurlijke wijze gelooid
                        en gekleurd Ecopell leer. Én: een Leeratelier, waarin echt wat te leren valt. Anita leert zelf
                        nog elke dag. En deelt dat graag met jou, in leerzame workshops.
                        <br /><br />
                            <strong>“Als je stappen maakt, moet je dat met schoenen doen.”</strong>
                            <br /><br />
                        Anita Hardeman wilde de volgende stap maken in haar leven. Na jaren van hulpverlening, wilde ze
                        zelf iets uit haar handen laten komen. Liefst iets om aan haar voeten te trekken. Niet in de
                        laatste plaats omdat ze zelf een doorgeslagen schoenen- en laarzengek is.<br /><br />

                            <h2>Leertijd</h2>

                        Ze ging in de leer bij topontwerpers Rene van den Berg en Liesel Swart, en rondde in 2017 haar
                        opleiding Ambachtelijk Schoenmaken aan Dutch Shoe Academy in Utrecht af. Om haar huiswerk goed
                        te kunnen doen, vond ze een atelier in de Utrechtse Stadstuin, waar ook collega leerbewerkers
                        gevestigd zijn.<br /><br />

                        Anita: “Ik had de smaak al snel te pakken. En telkens als ik mijn zelfgemaakte schoenen of
                        laarzen aan vrienden liet ziet zien, waren ze dolenthousiast. ‘O die wil ik ook!’ was vaak de
                        reactie. Nou dat kan. En wat is het leuk om te zien dat mensen op jouw creaties rondlopen.”<br /><br />

                            <h2>Ambachtelijk met leer werken</h2>

                        “Ik heb echt mijn plek gevonden. En een ambachtelijk beroep waar ik me dolgelukkig in voel.
                        Werken met leer is iets heel bijzonders. Ik merk ook dat andere mensen daar behoefte aan hebben,
                        daarom heb ik besloten workshops aan te bieden. Niet te moeilijk, je moet in één dag je
                        resultaat kunnen zien. En aan kunnen trekken. Dat geeft voldoening.”<br /><br />

                        Het atelier in de Stadstuin is al veel meer dan alleen de werkplaats van Anita. Het is een
                        volwaardig Leeratelier, waar Anita zich uitleeft op haar eigen ATTA footfashion-lijn. En waar ze
                        in opdracht speciaal schoenen en laarzen ontwerpt. In alle soorten en maten. Maar met de unieke
                        ATTA look.</p>
                </section>
            </div>
</div>

        )
    }
} 