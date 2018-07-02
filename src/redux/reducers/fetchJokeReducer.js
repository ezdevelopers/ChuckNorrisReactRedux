import {FETCH_JOKE} from '../action/type';

const initialState = {
    posts:[]
}

//this reducer function reduces the FETCH_JOKE case which is an action to 
//call the jokes from the chuckNorris API
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_JOKE:
        console.log(action.category);
        console.log(state)
        return{
            posts:action.joke
        }
       
        default:
        return{
            state
        }
    }
}