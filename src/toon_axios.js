import axios from 'axios';

// base url to make requests to DeepAI

const instance = axios.create({
    baseURL: 'https://toonify.p.rapidapi.com/v0',
})


export default instance;