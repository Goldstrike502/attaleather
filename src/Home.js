import React from 'react';
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
<div className="Home">
            <div className="bg-white">
                <section>
                    <h1><span>ATTA</span> is het leeratelier van Anita Hardeman,sinds 2016 gevestigd in de Stadstuin Utrecht.
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
                    <button><span>Laten</span> maken</button>
                </section>
            </div>
</div>

        )
    }
} 