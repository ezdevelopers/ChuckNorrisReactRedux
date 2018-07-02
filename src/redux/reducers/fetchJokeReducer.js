import {FETCH_JOKE} from '../action/type';

const initialState = {
    joke:[]
}

//this reducer function reduces the FETCH_JOKE case which is an action to 
//call the jokes from the chuckNorris API
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_JOKE:
        return {
            joke: [action.joke]
        }
       
        default:
        return state
        
    }
}