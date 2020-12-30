import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './PhotoEffect2.css';

function PhotoEffect2({src, short, more}) {

    const history = useHistory();

    return (
        <div className = 'photoEffect2'>
            
            <div className = 'photoEffect2__text'>
                <h3>{short}</h3>
                <p>{more}</p>

                <Button
                    onClick = {() => history.push('/styleT')}
                    variant = 'outlined'>
                    Try it
                </Button>

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
