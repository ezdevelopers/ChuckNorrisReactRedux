import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

//set the intial state of the store
const initialState = {};

//use thunk as a middleware to allow for dispatching to the reducer
const middleware = [thunk];

//create an instance of the store
const store = createStore(rootReducer,initialState,applyMiddleware(...middleware)
    );

export default store;