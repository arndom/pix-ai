import React from 'react';
import './PhotoEffect2.css';

function PhotoEffect2({src, short, more}) {
    return (
        <div className = 'photoEffect2'>
            
            <div className = 'photoEffect2__text'>
                <h3>{short}</h3>
                <p>{more}</p>
            </div>

            <img
                className = 'photoEffect2__image'
                src = {src}
                alt = ''
            />

        </div>
    )
}

export default PhotoEffect2
