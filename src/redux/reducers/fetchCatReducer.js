import {FETCH_CAT} from '../action/type';

let initialState = {
    posts:[]
}

//this reducer function reduces the FETCH_CAT case which is an action to 
//call the categories from the chuckNorris API
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_CAT:
        return {
            posts:action.category
        }
       
        default:
        return state
    }
}