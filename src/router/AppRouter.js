import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ChuckNorris from '../App';
import PostView from '../components/Jokes';


export default class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ChuckNorris}/>
                <Route path="/jokes" component={PostView}/>
            </div>
        </BrowserRouter>       
    )
  }
}
