import { Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './StyleTransfer.css';
import { Link } from 'react-router-dom';
import axios from '../da_axios';
import {requests,  DA_API_KEY} from '../requests';
import PhotoCamera from '@material-ui/icons/PhotoCamera';   
import LoadingOverlay from 'react-loading-overlay';
import GetAppIcon from '@material-ui/icons/GetApp';



function StyleTransfer() {

    const[content, setContent] = useState(null);
    const[style, setStyle] = useState(null);
    const[output, setOutput] = useState(null);

    const[outputOverlay, setOutputOverlay] = useState(false);
    const[disable, setDisable]= useState(true);


    const data = new FormData();

    async function fetchData(){
        setOutput(null);
        const response = await axios.post(requests.fetchStyle,
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

    function downloadImage(src) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
            // create Canvas
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // create <a> tag
            const a = document.createElement("a");
            a.download = "download.jpg";
            a.href = canvas.toDataURL("image/png");
            a.click();
        };
    }

    useEffect(() => {
        data.append('content', content)
        data.append('style', style)
        if(output){
            setOutputOverlay(false);
        }
        if(content&&style){
            setDisable(false);
        }

        if(!content&&!style){
            setDisable(true);
        }
    }, [data, content, style, output])

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
                                <h3>Content (Photo)</h3>
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
                                 <h3>Style (Art)</h3>                           
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

                    <IconButton onClick ={()=>{
                            downloadImage(output)
                        }}>
                            {output && <GetAppIcon/>}
                        </IconButton>
                    
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
                            disabled = {disable}

                            onClick = {()=>{
                                fetchData()
                                setOutputOverlay(true)
                            }
                                }
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

                    

                </div>
                <LoadingOverlay
                    active = {outputOverlay}
                    spinner
                    text = 'Loading creation...'
                >
                <div className = 'styleTransfer__Output'>
                    {output && <img src = {output}/>}   
                </div>
                </LoadingOverlay>
                
            </div>


        </div>
    )
}

export default StyleTransfer
