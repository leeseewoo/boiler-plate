import axios from 'axios';
import {
    LOGIN_USER
} from './types';




export function loginUser(dataToSubmit) {
    console.log('hello-useraction')
    const request = axios.post('/api/users/login', dataToSubmit)
    .then( response =>  response.data )

    return {
        type: LOGIN_USER,
        payload: request 
    }
}