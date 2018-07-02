import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ChuckNorris from '../App';
import PostView from '../components/Jokes';


export default class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
             {/** Available routers inside the chuck Norris app to get the home page and the path to jokes**/}
                <Route exact path="/" component={ChuckNorris}/>
                <Route path="/jokes" component={PostView}/>
            </div>
        </BrowserRouter>       
    )
  }
}
