import React from 'react';
import './FaceFilter.css';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Link } from 'react-router-dom';


function FaceFilter() {
    return (
        <div className = 'faceFilter'>

            <div className = 'faceFilter__content'>

                <div className = 'faceFilter__contentLeft'>

                    <div className = 'faceFilter__logo'>
                        <Link to = '/'>
                            <h2>PixAI</h2>
                        </Link>
                        <h3>Face Filters</h3>
                    </div>

                    <div className = 'faceFilter__contentInput'>

                        <div className = 'faceFilter__contentInputUpload' >
                            <div className = 'faceFilter__contentInputUploadButton'>
                                <input 
                                    accept="image/*"
                                    className='faceFilter__contentInputUploadButtonInput'
                                    id="icon-button-file"
                                    type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label>     
                            </div>   

                            <p>
                                Add a photo
                            </p>
                        </div>

                        <div className = 'faceFilter__contentInputInfo'>
                            
                            <p>
                                <FavoriteIcon/>
                                Toonify
                            </p>

                            <p>
                                <FavoriteIcon/>  
                                Zombify
                            </p>

                            <p>
                                <FavoriteIcon/>
                                Illustration
                            </p>

                            <p>
                                <FavoriteIcon/>
                                Share
                            </p> 
                        </div>

                        <Button
                            variant = 'outlined'>
                            Filter
                        </Button>     
                    </div>

                </div>

                <div className = 'faceFilter__contentOutput'>

                </div>

            </div>
            
        </div>
    )
}

export default FaceFilter
