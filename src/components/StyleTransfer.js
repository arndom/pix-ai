import { Button } from '@material-ui/core';
import React from 'react';
import './StyleTransfer.css';
import { Link } from 'react-router-dom';


function StyleTransfer() {
    return (
        <div className = 'styleTransfer'>

            <div className = 'styleTransfer__content'>

                <div className = 'styleTransfer__contentLeft'>
                    <Link to = '/'>
                        <h2>PixAI</h2>     
                    </Link>

                    <h3>Style Transfer</h3>

                    <div className = 'styleTransfer__Input'>

                        <div className = 'styleTransfer__InputContent'>
                            <h3>Content</h3>
                            <input
                                accept="image/*"
                                className='styleTransfer__InputContentInput'
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>

                        <div className = 'styleTransfer__InputStyle'>
                            <h3>Style</h3>
                            <input
                                accept="image/*"
                                className='styleTransfer__InputStyleInput'
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>

                    </div>

                    <Button
                            variant = 'outlined'>
                            Merge
                    </Button> 
                </div>


                <div className = 'styleTransfer__Output'>

                </div>
                
            </div>


        </div>
    )
}

export default StyleTransfer
