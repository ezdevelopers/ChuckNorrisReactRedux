import {FETCH_JOKE} from './type';

//fetch joke action which pulls all the jokes from the chuckNorris API
export const fetchJoke = () => (dispatch) => (
    fetch('https://api.chucknorris.io'+ this.props.location.pathname + this.props.location.search)
        .then(res => res.json())
        .then(joke =>dispatch({
            type:FETCH_JOKE,
            joke:joke
        }))
)


