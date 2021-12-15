import './section-3.css';
import React from 'react';



export class PSection3 extends React.Component {

    render() {
        return (
            <div id='partner-section-3'>
                <div className='container'>
                    <div class='content-container'>
                        <h2>A single platform for all bars, pubs and clubs</h2>
                        <div class='row'>
                            <div class='col-lg-6'>
                                <h4>Better for Guests</h4>
                                <p>One app to discover all venues and enjoy new experiences</p>
                            </div>
                            <div class='col-lg-6'>
                                <h4>Better for Operations</h4>
                                <p>Manage venue operations from one location and save time</p>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-lg-6'>
                                <h4>Better for Employees</h4>
                                <p>Centralise information and let staff focus on delighting patrons</p>
                            </div>
                            <div class='col-lg-6'>
                                <h4>Better for Business</h4>
                                <p>Know what works with data-driven insights from your patronage</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>      
        )
    }
}

export default PSection3;