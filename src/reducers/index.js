import Axios from 'axios';
import {INITIALDATA, LOADDATA, ERRORRES, POSTSMURF} from '../actions/index';

export const initialState = {
    smurfs : [], isLoading : false,
    error : "", badSub : "" 
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(LOADDATA):
            return({
                ...state,
                isLoading : true
            });
        case(INITIALDATA):
            return({
                ...state,
                isLoading : false,
                smurfs : action.payload,
            });
        case(ERRORRES):
            return({
                ...state,
                isLoading : false,
                error: action.payload
            });
        case(POSTSMURF):
            return ({
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, action.payload]
            })
            
        default:
            return(state);
    }
}

