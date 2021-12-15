import './section-1.css';
import Phone from '../phone/phone.js'
import React from 'react';

export class Section1 extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./scripts.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div id='section-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className='left' id='left'>
                                <h1>...we're for good times.</h1>
                                <h4>BarM8 makes discovering new bars, and all the great stuff they have going on, easy. Free with no subscription, it's the smart way to socialise in Sydney.</h4>
                            </div>
                            <div className='button-group'>
                                <div className='row'>
                                    <button className='download'>Download Free Today</button>
                                    <div className='store-wrapper'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <a href="https://apps.apple.com/au/app/barm8/id1402470106" target="_blank"> <img src='appstore.svg' className='store-button'></img></a>
                                            </div>
                                            <div className='col-6'>
                                                <a href="https://play.google.com/store/apps/details?id=com.barm8" target="_blank"> <img src='googleplay.svg' className='store-button'></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <Phone src='./image1.png' id='image1' />
                        </div>
                    </div>
                </div>

                <div className="styles__SideNav-kd2kl4-1 gOrZUu">
                    <a className="styles__ScrollLink-kd2kl4-0 jwpVBP bullet1 active"></a>
                    <a className="styles__ScrollLink-kd2kl4-0 jwpVBP bullet2"></a>
                    <a className="styles__ScrollLink-kd2kl4-0 jwpVBP bullet3"></a>
                    <a className="styles__ScrollLink-kd2kl4-0 jwpVBP bullet4"></a>
                </div>

                <div className='half-phone-box'>
                    <div className='frame'>
                        <div className='notch'></div>
                        <div className='iphone'>
                            <div id="comparison">
                                <figure>
                                    <div id="divisor"></div>
                                    <div id="divisor1"></div>
                                    <div id="divisor2"></div>
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default Section1;