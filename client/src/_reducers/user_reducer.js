import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function ( state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            //console.log('Hello1');
            return { ...state, loginSuccess: action.payload }
            break;

        case REGISTER_USER:
            //console.log('Hello1');
            return { ...state, register: action.payload }
            break;    

        case AUTH_USER:
            //console.log('Hello1');
            return { ...state, userData: action.payload }
            break;    
        
        default:
            return state;
    }
}