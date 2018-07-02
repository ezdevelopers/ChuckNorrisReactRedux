import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';

 class Posts extends Component {
     constructor(props){
        super(props);

        this.state = {
            posts:[]
        }
     }
     componentDidMount(){
         fetch('https://api.chucknorris.io/jokes/categories')
         .then(res => res.json())
         .then(data => this.setState({posts: data}))
     }
  render() {
    return (
      <div>
        <ol className='cat-list'>
        {this.state.posts.map((cat,indx)=>(
            <li key={indx} className="cat-list-item">
            <div className="cat-details">{cat}</div>
            <Link to={{
              pathname: '/jokes/random',
              search: '?category='+ cat
            }} className="cat-forward">forward</Link>
            </li>
        ))}
        </ol>
      
      </div>
    )
  }
}

export default Posts;