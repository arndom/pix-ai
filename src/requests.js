import {CREDENTIALS} from './key_config';

const DA_API_KEY = CREDENTIALS.D_API_KEY;

const TOON_API_KEY = process.env.REACT_APP_T_API_KEY;

const DZOOK_API_KEY = CREDENTIALS.DZ_API_KEY;


const requests = {
    fetchColor: `/colorizer`,
    fetchStyle: `/fast-style-transfer`,
    fetchZombify: `/zombify?face_index=0&return_aligned=false&crop_edges=0&proceed_without_face=false`,
    fetchToonify: `/toonify?face_index=0&return_aligned=false&crop_edges=0&proceed_without_face=false`,
    fetchToonifyPlus: `/toonifyplus?face_index=0&return_aligned=false&crop_edges=0&proceed_without_face=false`,
    fetchDzook: `/anime`    
}

export {requests, DA_API_KEY, TOON_API_KEY, DZOOK_API_KEY}; 
