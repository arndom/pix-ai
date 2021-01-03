import React, { useEffect, useState } from 'react';
import './FaceFilter.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Link } from 'react-router-dom';
import {requests, TOON_API_KEY, DZOOK_API_KEY} from '../requests';
import toon_axios from '../toon_axios';
import dzook_axios from '../dzook_axios';
import 'react-dropdown/style.css';    
import LoadingOverlay from 'react-loading-overlay';
import GetAppIcon from '@material-ui/icons/GetApp';

function FaceFilter() {

    const[face, setFace] = useState(null);
    // const[filter,  setFilter] = useState(requests.fetchZombify);
    const[output, setOutput] = useState(null);
    const[base64, setBase64] = useState(null);

    const[outputOverlay, setOutputOverlay] = useState(false);
    const[disable, setDisable]= useState(true);

    const filterOptions = [
        {value: requests.fetchZombify, label: 'Zombify'},
        {value: requests.fetchToonify, label: 'Toonify'},
        {value: requests.fetchToonifyPlus, label: 'Toonify_v2'},
        {value: requests.fetchDzook, label: 'Illustration'},
    ];


    const toonData = new FormData();
    var  dzookData = null;


    async function fetchZombieData(){
        // console.log(TOON_API_KEY)
        setOutput(null);
        const response = await toon_axios.post(requests.fetchZombify,
            toonData,
            { headers: {
                'X-RapidAPI-Key':TOON_API_KEY,
                'Content-type': 'multipart/form-data',
                'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
                'Accept': 'image/jpeg, application/json, text/plain, */*'
            }
            },

            {timeout: 0},
            {processData: false},
            {mimeType: "multipart/form-data"},
            {contentType: false}
        );
        // console.log(response);
        
        // console.log(filter);

        setOutput(response.data.b64_encoded_output)
        // console.log(photo);
        return response;
    }

    async function fetchToonData(){
        // console.log(TOON_API_KEY)

        setOutput(null);
        const response = await toon_axios.post(requests.fetchToonify,
            toonData,
            { headers: {
                'X-RapidAPI-Key':TOON_API_KEY,
                'Content-type': 'multipart/form-data',
                'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
                'Accept': 'image/jpeg, application/json, text/plain, */*'
            }

            },
            {timeout: 0},
            {processData: false},
            {mimeType: "multipart/form-data"},
            {contentType: false}
        );
        // console.log(response);
        // console.log(filter);

        setOutput(response.data.b64_encoded_output)
        // console.log(photo);
        return response;
    }

    async function fetchToonPlusData(){
        // console.log(TOON_API_KEY)

        setOutput(null);
        const response = await toon_axios.post(requests.fetchToonifyPlus,
            toonData,
            { headers: {
                'X-RapidAPI-Key':TOON_API_KEY,
                'Content-type': 'multipart/form-data',
                'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
                'Accept': 'image/jpeg, application/json, text/plain, */*'
            }

            },
            {timeout: 0},
            {processData: false},
            {mimeType: "multipart/form-data"},
            {contentType: false}
        );
        // console.log(response);
        // console.log(filter);

        setOutput(response.data.b64_encoded_output)
        // console.log(photo);
        return response;
    }

    async function fetchDzookData(){
        const response = await dzook_axios.post(requests.fetchDzook,
            dzookData,
            { headers: 
                DZOOK_API_KEY,
                "content-type": "application/json",
                "x-rapidapi-host": "dzook4.p.rapidapi.com",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST,DELETE, PATCH,OPTIONS',
            },
            {timeout: 0},
        );
        console.log(response);

        // console.log(base64);
        console.log(dzookData);
        return response;
    }

    function encodeImageFileAsURL(element) {
        var file = element;
        var reader = new FileReader();
        reader.onloadend = function() {
        //   console.log(reader.result)
            setBase64(reader.result)
        }
        reader.readAsDataURL(file);
        // return reader.readAsDataURL(file);
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

    useEffect(()=>{
        toonData.append('image', face);
        
        // if(face){
        //     encodeImageFileAsURL(face);
        //     dzookData =  JSON.stringify({
        //         'image': base64,
        //         "return_aligned":false
        //     });


        //     console.log(dzookData);


        //     }

        // add , dzookData,base64 as dependents 

        if(output){
            setOutputOverlay(false);
        }

        if(face){
            setDisable(false);
        }

        if(!face){
            setDisable(true);
        }

        },[toonData, face, output])

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
                                    type="file"
                                    onChange = {(e) =>
                                        
                                        setFace(e.target.files[0])
                                    }
                                />

                                {face && <img src = {face && URL.createObjectURL(face)} />}

                                {!face &&
                                    <label htmlFor="icon-button-file">
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span">
                                        <PhotoCamera 
                                        />
                                        </IconButton>
                                    </label>
                                }

    

                            </div>   
                            
                            {!face &&
                                <p>
                                    Add a photo
                                </p>
                            }

                        </div>

                        {!face &&
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
                        }
                        
                        <div className='faceFilter__contentInputRun'>

                            <input 
                                accept="image/*"
                                className='faceFilter__contentInputUploadButtonInput'
                                id="icon-button-file"
                                type="file"
                                onChange = {(e) =>{
                                    setFace(e.target.files[0])
                                }
                                }
                            />

                            {face &&
                                <label htmlFor="icon-button-file">
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span">
                                    <PhotoCamera 
                                    />
                                    </IconButton>
                                </label>
                            }

                            <Button
                                disabled = {disable}

                                onClick = {()=>{
                                    fetchZombieData();
                                    setOutputOverlay(true)
                                }}
                                variant = 'outlined'>
                                Zombify
                            </Button>

                            <Button
                                disabled = {disable}

                                onClick = {()=>{
                                    fetchToonData()
                                    setOutputOverlay(true)

                                }}
                                variant = 'outlined'>
                                Toonify
                            </Button>

                            <Button
                                disabled = {disable}

                                onClick = {()=>{
                                    fetchToonPlusData()
                                    setOutputOverlay(true)
                                }}
                                variant = 'outlined'>
                                Toonify2
                            </Button>
                            

                        </div>
                        <IconButton onClick ={()=>{
                            downloadImage(`data:image/jpeg;base64,${output}`)
                        }}>
                            {output && <GetAppIcon/>}
                        </IconButton>
  
                    </div>

                </div>
                <LoadingOverlay
                    active = {outputOverlay}
                    spinner
                    text = 'Loading creation...'
                >

                <div className = 'faceFilter__contentOutput'>
                    { output && <img src = {`data:image/jpeg;base64,${output}`}/>}   
                </div>
                </LoadingOverlay>

            </div>
            
        </div>
    )
}

export default FaceFilter
