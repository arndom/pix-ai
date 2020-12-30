import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './StyleTransfer.css';
import { Link } from 'react-router-dom';


function StyleTransfer() {

    const[content, setContent] = useState(null);
    const[style, setStyle] = useState(null);

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

                            {!content &&
                                <h3>Content</h3>
                            }
                            
                            <input
                                accept="image/*"
                                className='styleTransfer__InputContentInput'
                                id="contained-button-file1"
                                multiple
                                type="file"
                                onChange = {(e)  => setContent(e.target.files[0])}
                            />

                            {content && <img src = {content && URL.createObjectURL(content)}/>}       

                            {!content &&
                                <label htmlFor="contained-button-file1">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            }
                            

                        </div>

                        <div className = 'styleTransfer__InputStyle'>
                            
                            {!style && 
                                 <h3>Style</h3>                           
                            }

                            <input
                                accept="image/*"
                                className='styleTransfer__InputStyleInput'
                                id="contained-button-file2"
                                multiple
                                type="file"
                                onChange = {(e)  => setStyle(e.target.files[0])}
                            />

                            {style && <img src = {style && URL.createObjectURL(style)}/>} 

                            {!style &&
                                <label htmlFor="contained-button-file2">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            }


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
