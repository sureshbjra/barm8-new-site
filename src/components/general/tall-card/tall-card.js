import './tall-card.css';
import React from 'react';

function TallCard(props) {

    return (
        <div class='tall-card'>
            <h5 class='tall-card-title'>{props.title}</h5>
            <div class='tall-card-subtitle'>{props.subtitle}</div>
            <div class='tall-card-color-text' style={props.style}>{props.colorText}</div>
            <div class='tall-card-text'>{props.text}</div>
            <a href="#contact">
                <button class='btn tall-card-button'>{props.cta}</button>
            </a>
        </div>
    )
}


export default TallCard;