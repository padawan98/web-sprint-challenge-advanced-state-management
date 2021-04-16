import axios from 'axios';

export const INITIALDATA = "INITIALDATA";
export const LOADDATA = "LOADDATA";
export const ERRORRES = "ERRORRES";
export const POSTSMURF = "POSTSMUF";

export const initialData = () =>{
    
    console.log("outside of dispatch 1");
    return dispatch => { 
        dispatch ({type:LOADDATA})
        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            // console.log(res.data);
            dispatch({type:INITIALDATA, payload: res.data});
        })
        .catch(err =>{
            dispatch({type:ERRORRES, payload:err.Response.code})
        });
    }
}

export const postSmurf = smurf => {
    return dispatch => {
        axios.post("http://localhost:3333/smurfs", smurf)
        .then( res => {
            dispatch ({type: POSTSMURF, payload: smurf})
        })
        .catch (err => {
            dispatch({type : ERRORRES, payload: err})
        })
    }
}