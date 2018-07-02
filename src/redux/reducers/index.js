import { combineReducers } from 'redux';
import fetchCatReducer from './fetchCatReducer';
import fetchJokeReducer from './fetchJokeReducer';

//root reducer used in Store.js
//this function combines all the reducers in our app using the combineReducer function
export default combineReducers({
    cat:fetchCatReducer,  
    joke:fetchJokeReducer
})
