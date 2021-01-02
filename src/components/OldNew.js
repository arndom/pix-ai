import React, { useEffect, useState } from 'react';
import './OldNew.css';
import { Button, IconButton, useEventCallback} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PhotoCamera from '@material-ui/icons/PhotoCamera';   
import axios from '../da_axios';
import {requests,  DA_API_KEY} from '../requests';
// import DA_API_KEY from '../requests';
import LoadingOverlay from "react-loading-overlay";

function OldNew() {

    const[photo, setPhoto] = useState(null);
    const[output, setOutput] = useState(null);

    const data =new FormData();
    
    async function fetchData(){
        const response = await axios.post(requests.fetchColor,
            data,
            { headers:{
                "api-key": DA_API_KEY,
                'Content-type': 'multipart/form-data'}
            } 
            );
        // console.log(response);
        setOutput(response.data.output_url)
        // console.log(photo);
        return response;
    }

    useEffect(()=>{
        data.append('image', photo)
    },[data, photo])


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

                            {!photo &&
                                <h3>Old Photo</h3>
                            } 
    
                            
                            <input 
                                accept="image/*"
                                className='oldNew__InputStyleInput'
                                id="icon-button-file"
                                type="file" 
                                onChange = {(e) => setPhoto(e.target.files[0])}
                                />

                                {photo && <img src = {photo && URL.createObjectURL(photo)}/>}


                            {!photo &&
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera/>
                                    </IconButton>
                                </label> 
                            }


                        </div>

                    </div>

                    <div className = 'oldNew__run'>
                        <input 
                            accept="image/*"
                            className='oldNew__InputStyleInput'
                            id="icon-button-file"
                            type="file" 
                            onChange = {(e) => setPhoto(e.target.files[0])}
                        />
                           
                        {photo &&
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera/>
                                </IconButton>
                            </label> 
                        }

                        <Button
                            onClick = {
                                fetchData
                            }
                            variant = 'outlined'>
                            Revitalise
                        </Button> 
                    </div>
                    
                    {/* <Button
                            onClick = {
                                fetchData
                            }
                            variant = 'outlined'>
                            Revitalise
                    </Button>  */}
                </div>

                <div className = 'oldNew__Output'>
                    {output && <img src = {output}/>}
            </div>

            </div>


        </div>
    )
}

export default OldNew
