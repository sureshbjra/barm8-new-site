import './section-2.css';
import React from 'react';
import SlideMenu from '../../general/slide-menu/slide-menu.js';



export class PSection2 extends React.Component {

    render() {
        return (
            <div className='container'>
                <div id='partner-section-2'>
                    <h2>How our Partners use BarM8</h2>
                    <h4>Create deeper connections with your patrons, your way.</h4>
                    <br />
                    <SlideMenu />
                </div>    
            </div>      
        )
    }
}

export default PSection2;