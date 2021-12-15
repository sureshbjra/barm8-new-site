import './slide-menu.css';
import React from 'react';

function Slide(props) {

    return (
        <div id={props.id}>
            <div className='slide'>
                <div className='row'>
                    <div className={props.leftColWidth}>
                        <div className='left'>
                            <h3 className='left-title'>{props.leftTitle}</h3>
                            <br />
                            <div className='left-text'>
                                {props.leftText}
                                <br /><br />
                                {props.leftTextBottom}
                            </div>
                            <a href={props.url} className={props.buttonClass}><button className='btn btn-primary left-button'>{props.leftButton}</button></a>
                        </div>
                    </div>
                    <div className={props.rightColWidth}>
                        <div className='slide-image-container'>
                            <img src={props.image} className={props.imageClass} />
                            <video className={props.videoClass} src={props.video} type="video/mp4" width="200" autoPlay muted loop controls>
                                {/* <source src={props.video} type="video/mp4" autoplay muted loop controls/> */}
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Slide;