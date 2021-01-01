import { Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './StyleTransfer.css';
import { Link } from 'react-router-dom';
import axios from '../da_axios';
import {requests,  DA_API_KEY} from '../requests';
import PhotoCamera from '@material-ui/icons/PhotoCamera';   



function StyleTransfer() {

    const[content, setContent] = useState(null);
    const[style, setStyle] = useState(null);
    const[output, setOutput] = useState(null);

    const data = new FormData();

    async function fetchData(){
        const response = await axios.post(requests.fetchStyle,
            data,
            { headers: 
                DA_API_KEY,
                'Content-type': 'multipart/form-data'}
            );
        console.log(response);
        setOutput(response.data.output_url)
        // console.log(photo);
        return response;
    }

    useEffect(() => {
        data.append('content', content)
        data.append('style', style)
    }, [content, style])

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
                    
                    <div className = 'styleTransfer__contentLeftRun'>
                        <input 
                            accept="image/*"
                            className='oldNew__InputStyleInput'
                            id="icon-button-file1"
                            type="file" 
                            onChange = {(e) => setContent(e.target.files[0])}
                        />

                        
                        {content &&
                            <label htmlFor="icon-button-file1">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                     <PhotoCamera/>
                                </IconButton>
                            </label> 
                        }

                        <Button
                            onClick = {fetchData}
                            variant = 'outlined'>
                            Merge
                        </Button> 

                        <input 
                            accept="image/*"
                            className='oldNew__InputStyleInput'
                            id="icon-button-file2"
                            type="file" 
                            onChange = {(e) => setStyle(e.target.files[0])}
                        />
                           
                        {style &&
                            <label htmlFor="icon-button-file2">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera/>
                                </IconButton>
                            </label> 
                        }
                    </div>

                    {/* <Button
                            onClick = {fetchData}
                            variant = 'outlined'>
                            Merge
                    </Button>  */}
                </div>


                <div className = 'styleTransfer__Output'>
                    {output && <img src = {output}/>}   
                </div>
                
            </div>


        </div>
    )
}

export default StyleTransfer
