import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PostView extends Component {
  constructor(props){
    super(props);
    this.state = {
        jokes:[]
    };
  }
  
  componentDidMount(){
    fetch('https://api.chucknorris.io'+ this.props.location.pathname + this.props.location.search)
    .then(res => res.json())
    .then(data => this.setState({jokes: [data]}))
}

  render() {
    console.log(this.state.jokes)
    return (
      <div>
      <Link to="/" className="close-create-cat"></Link>
      <ol className='cat-list'>
      {this.state.jokes && this.state.jokes.map((joke)=>(
          <li key={joke.id} className="cat-list-item">
            <div className="cat-avatar" style={{backgroundImage: `url(${joke.icon_url})`}} ></div>
            <div className="cat-details">
              <p>{joke.value}</p> 
              <a href={joke.url} target="_blank">Link to Joke</a>
           </div>
          </li>
      ))}
      </ol>
      
      </div>
    )
  }
}
