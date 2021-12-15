import './section-3.css';
import Phone from '../phone/phone.js'

function Section3() {
    return (
        <div id='section-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='left'>
                            <h1>Score food and drink deals from our local bars and pubs.</h1>
                            <h4>Exclusive food and drink offers from our local venues? We'll drink to that. Just show your BarM8 coupon at the counter and we'll keep the good times coming.</h4>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <Phone src='./image3.png' id='image3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;