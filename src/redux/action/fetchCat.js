import {FETCH_CAT} from './type';

//fetch cat action which pulls all the jokes from the chuckNorris API
export const fetchCat = () => dispatch => {
    return(
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(category =>dispatch({
            type:FETCH_CAT,
            category:category
        }))
)}
        

    

