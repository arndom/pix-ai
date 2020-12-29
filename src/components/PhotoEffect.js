import React from 'react';
import './PhotoEffect.css';

function PhotoEffect({src, short, more}) {
    return (
        <div className = 'photoEffect'>
            
            <img
                className = 'photoEffect__image'
                src = {src}
                alt = ''
            />

            <div className = 'photoEffect__text'>
                <h3>{short}</h3>
                <p>{more}</p>
            </div>

        </div>
    )
}

export default PhotoEffect
