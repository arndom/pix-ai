import React, { useEffect, useState } from 'react';
import './FaceFilter.css';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Link } from 'react-router-dom';
import {requests, TOON_API_KEY, DZOOK_API_KEY} from '../requests';
import toon_axios from '../toon_axios';
import dzook_axios from '../dzook_axios';
// import { Base64 } from 'js-base64';
// import imageToBase64  from 'image-to-base64';
// import   from '../assets/images/old-color.jpg'       

function FaceFilter() {

    const[face, setFace] = useState(null);
    const[filter,  setFilter] = useState(requests.fetchZombify);
    const[output, setOutput] = useState(null);
    const[b, setB] = useState(null);


    const toonData = new FormData();
    var  dzookData = null;

    async function fetchToonData(){
        const response = await toon_axios.post(filter,
            toonData,
            { headers: 
                TOON_API_KEY,
                'Content-type': 'multipart/form-data',
                'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
                'accept': 'image/jpeg'
            },
            {timeout: 0},
            {processData: false},
            {mimeType: "multipart/form-data"},
            {contentType: false}
        );
        console.log(response);

        setOutput(response.data.b64_encoded_output)
        // console.log(photo);
        return response;
    }

    // async function fetchDzookData(){
    //     const response = await dzook_axios.post(requests.fetchDzook,
    //         dzookData,
    //         { headers: 
    //             DZOOK_API_KEY,
    //             "content-type": "application/json",
    //             "x-rapidapi-host": "dzook4.p.rapidapi.com",
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, PUT, POST,DELETE, PATCH,OPTIONS',
    //         },
    //         {timeout: 0},
    //     );
    //     console.log(response);

    //     // console.log(b);
    //     console.log(dzookData);
    //     return response;
    // }

    // function encodeImageFileAsURL(element) {
    //     var file = element;
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //     //   console.log(reader.result)
    //       setB(reader.result)
    //     }
    //     reader.readAsDataURL(file);
    //     // return reader.readAsDataURL(file);
    //   }



    useEffect(()=>{
        toonData.append('image', face);
        // if(face){
        //     encodeImageFileAsURL(face);
        //     dzookData =  JSON.stringify({
        //         'image': b,
        //         "return_aligned":false
        //     });

        //     // dzookData.image.replace('data:image/jpeg;base64,', '')

        //     console.log(dzookData);


        //     }

        // add , dzookData,b as dependents 
        },[face])

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

                        <Button
                            onClick = {fetchToonData}
                            variant = 'outlined'>
                            Filter
                        </Button>     
                    </div>

                </div>

                <div className = 'faceFilter__contentOutput'>
                { output && <img src = {`data:image/jpeg;base64,${output}`}/>
                }   

                </div>

            </div>
            
        </div>
    )
}

export default FaceFilter
