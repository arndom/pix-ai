import React from 'react';
import './PhotoEffect.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


function PhotoEffect({src, short, more, tab}) {

    const history = useHistory();
    
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

                <Button
                    onClick = {()  => {
                        tab === 'face' ?  history.push('/faceF') : history.push('/oldN')
                    }}
                    variant = 'outlined'>
                    Try it
                </Button>

            </div>

        </div>
    )
}

export default PhotoEffect
