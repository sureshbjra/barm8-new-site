import './section-2.css';
import Phone from '../phone/phone.js'

function Section2() { 
    return (
           <div id='section-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='left'>
                            <h1>Check the vibe <em>before</em> you arrive.</h1>
                            <h4>Our curated venue profiles will help you find the perfect venue for any occasion. Like what you see? Make a booking, get directions there or keep scrolling for their upcoming offers and events.</h4>
                        </div>                           
                    </div>
                    <div className='col-lg-5'>
                        <Phone src='./image2.png' id='image2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;