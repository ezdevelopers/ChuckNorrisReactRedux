import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCat} from '../redux/action/fetchCat';

 class Posts extends Component { 
     componentDidMount(){
       this.props.fetchCat();
       console.log(this.props)
     }
  render() {
    return (
      <div>
        <ol className='cat-list'>
        {this.props.posts.map((cat,indx)=>(
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
const mapStateToProps = state => (
  {
    posts:state.cat.posts
  }
);
export default connect(mapStateToProps,{ fetchCat })(Posts);