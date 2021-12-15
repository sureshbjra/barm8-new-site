import './footer.css';
import React from 'react';

export class Footer extends React.Component {


    render() {
        return (
            <div id='footer'>
                <div className='brand'><img src="logo.png"></img></div>
                <h1 className='download-tag'>Download Bar M8 free today</h1>
                <div className='container'>
                    <div className='store-wrapper store-wrapper-footer'>
                        <a href="https://apps.apple.com/au/app/barm8/id1402470106" target="_blank"><img src='appstore.svg' className='store-button-footer'></img></a>
                        <a href="https://play.google.com/store/apps/details?id=com.barm8" target="_blank"><img src='googleplay.svg' className='store-button-footer'></img></a>
                    </div>
                    <br />
                    <section>
                        <ul class="social">
                            <li>
                                <a class="ease-all face-book" target="_blank" title="Facebook" href="https://www.facebook.com/barm8app/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a class="ease-all instagram" href="https://www.instagram.com/barm8app/" target="_blank" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </section>
                    <br />
                    <div className='disc-link-wrapper'>
                        <ul>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/contact' target='_blank'>Contact</a>
                            </li>
                            <li className='divider'>
                                |
                            </li>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/terms' target='_blank'>Terms of Service</a>
                            </li>
                            <li className='divider'>
                                |
                            </li>
                            <li className='disc-link'>
                                <a href='https://barm8.com.au/privacy' target='_blank'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;