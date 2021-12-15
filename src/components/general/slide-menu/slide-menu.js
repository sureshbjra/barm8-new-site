import './slide-menu.css';
import React from 'react';
import Slide from './slide.js';

export class SlideMenu extends React.Component {

    render(props) {
        return (
            <div>
                <div id='slide-menu'>
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="nav-link active" id="option1">Reach</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option2">Trial New Products</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option3">Manage Events</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option4">On-premise Insights</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option5">Data-backed Reports</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="option6">Reward Loyal Patrons</button>
                        </li>
                    </ul>
                </div>
                <br /><br />
                <div id='slide-content'>
                    <Slide
                        id="slide1"
                        leftTitle="Reach a larger local audience than social media"
                        leftText="BarM8 gives patrons an easy way to discover nearby bars, offers and events – at the right time – without needing to follow them all on social media."
                        leftButton="Get a Demo"
                        url="#contact"
                        image="./section2pt2.png"
                        className="show"
                        video=""
                        videoClass="hidden"
                        leftColWidth="col-lg-4"
                        rightColWidth="col-lg-8"
                    />
                    <Slide
                        id="slide2"
                        leftTitle="Trial new products and events with BarM8’s Limited Offers"
                        leftText="Whether you want to trial a new cocktail, event or menu, BarM8 gives you the power to offer new products with users, and the data to know what works."
                        leftButton="Get a Demo"
                        url="/"
                        image=""
                        video="section2pt3.mp4"
                        buttonClass="hidden"
                        leftColWidth="col-lg-6"
                        rightColWidth="col-lg-6"
                    />
                    <Slide
                        id="slide3"
                        leftTitle="Manage your events with free sign ups and ticketing"
                        leftText="No matter what type of event you’re hosting, BarM8 brings the good times with sign ups and ticketing directly from the BarM8 app – all at no extra cost to you."
                        leftButton="Get a Demo"
                        url="/"
                        image="./section2pt4.png"
                        buttonClass="hidden"
                        videoClass="hidden"
                        leftColWidth="col-lg-4"
                        rightColWidth="col-lg-8"
                    />
                    <Slide
                        id="slide4"
                        leftTitle="Get the full picture with BarM8’s on-prem insights"
                        leftText="Get deep insights into the demographics of the patron base that visit your venue."
                        leftButton="Get a Demo"
                        url="/"
                        image="./section2pt5.jpg"
                        buttonClass="hidden"
                        videoClass="hidden"
                        leftColWidth="col-lg-4"
                        rightColWidth="col-lg-8"
                    />
                    <Slide
                        id="slide5"
                        leftTitle="Data-backed insights straight to your inbox"
                        leftText="Don’t spend hours pouring over data – we’ll deliver actionable insights, backed by real data, straight to your inbox."
                        leftTextBottom="Coming Soon..."
                        leftButton="Get a Demo"
                        url="/"
                        image="./section2pt6.png"
                        buttonClass="hidden"
                        videoClass="hidden"
                        leftColWidth="col-lg-4"
                        rightColWidth="col-lg-8"
                    />
                    <Slide
                        id="slide6"
                        leftTitle="Reward your most loyal patrons"
                        leftText="Bring your mailing lists and newsletters into the real world with prioritised rewards for the customers that give you the most patronage."
                        leftButton="Get a Demo"
                        leftTextBottom="Coming Soon..."
                        url="/"
                        image="./section2pt7.jpg"
                        buttonClass="hidden"
                        videoClass="hidden"
                        leftColWidth="col-lg-4"
                        rightColWidth="col-lg-8"
                    />
                </div>
            </div>
        )
    }
}

export default SlideMenu;