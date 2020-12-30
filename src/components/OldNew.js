import React from 'react';
import './OldNew.css';
import { Button, IconButton} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
function OldNew() {
    return (
        <div className = 'oldNew'>
            <div className = 'oldNew__content'>

            <div className = 'oldNew__contentLeft'>
                <Link to = '/'>
                    <h2>PixAI</h2>     
                </Link>

                <h3>Old to New</h3>

                <div className = 'oldNew__Input'>

                    <div className = 'oldNew__InputStyle'>
                        <h3>Old Photo</h3>
                        <input 
                            accept="image/*"
                            className='oldNew__InputStyleInput'
                            id="icon-button-file"
                            type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label> 
                    </div>

                </div>

                <Button
                        variant = 'outlined'>
                        Revitalise
                </Button> 
            </div>


            <div className = 'oldNew__Output'>

            </div>

            </div>


        </div>
    )
}

export default OldNew
