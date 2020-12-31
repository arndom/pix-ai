import axios from 'axios';

// base url to make requests to DeepAI

const instance = axios.create({
    baseURL: 'https://api.deepai.org/api',
})


export default instance;