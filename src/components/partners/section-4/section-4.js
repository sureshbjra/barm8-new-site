import './section-4.css';
import React from 'react';
import TallCard from '../../general/tall-card/tall-card.js';



export class PSection4 extends React.Component {

    render() {
        return (
            <div className='container'>
                <div id='partner-section-4'>
                    <h2>Customizable solutions built for you</h2>
                    <br />
                    <div class='row'>
                        <div class='col-lg-4'>
                            <TallCard
                                title="Independents"
                                subtitle="Best for independent and smaller venues"
                                colorText="Independents"
                                style={{ background: "#ffb700" }}
                                text={
                                    <div>
                                        <p>Complete profile</p>
                                        <p>$0 upfront cost</p>
                                        <p>Pay as you go</p>
                                    </div>}
                                cta="Contact"
                            />
                        </div>
                        <div class='col-lg-4'>
                            <TallCard
                                title="Small Groups"
                                subtitle="Suited for operators overseeing 2 to 5 venues"
                                colorText="2 - 5 venues"
                                style={{ background: "#e3f0fb" }}
                                text={
                                    <div>
                                        <p>Data and analytics</p>
                                        <p>Detailed email reports</p>
                                        <p>Ticketing and bookings</p>
                                    </div>}
                                cta="Contact"
                            />
                        </div>
                        <div class='col-lg-4'>
                            <TallCard
                                title="Enterprise"
                                subtitle="Custom solutions for multi-venue operators"
                                colorText="5+ venues"
                                style={{ background: "#dd55d2" }}
                                text={
                                    <div>
                                        <p>We'll work with you to determine how BarM8 can best suit your venues and needs.</p>
                                        <br />
                                    </div>}
                                cta="Contact"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PSection4;