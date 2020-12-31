import axios from 'axios';

// base url to make requests to DeepAI

const instance = axios.create({
    baseURL: 'https://dzook4.p.rapidapi.com',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST,DELETE, PATCH,OPTIONS',
    }   
})


export default instance;