import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchJoke} from '../redux/action/fetchJoke';

class PostView extends Component {
  componentWillMount(){
    this.props.fetchJoke(this.props);
}

  render() {
    return (
      <div>
      <Link to="/">Go Back</Link>
      <ol className='cat-list'>
      {this.props.jokes && this.props.jokes.map((joke)=>(
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
const mapStateToProps = state => (
  {
    jokes:state.jokes.joke
  }
);
export default connect(mapStateToProps,{ fetchJoke })(PostView);