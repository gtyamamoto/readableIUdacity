import React,{Component} from 'react';
import {connect} from 'react-redux';
import {GET_POST_REQUEST} from '../actions/posts'
import Post from './post';


class PostDetails extends Component{
   
  
 
   componentDidMount(){
    const {id} = this.props.match.params;
    this.props.dispatch({type:GET_POST_REQUEST,id})
   }
   
//component to render a specific post
 
  render(){
      const {activePost}  = this.props;
      
     
        console.log(activePost)
      return (
          <div className="container">

                <div className="posts tc pt7">
                    <h3>Post </h3>
                    {activePost && (<Post post={activePost} editable={true}/>)}
                   
                
                </div>
              
          </div>
      )
  }

}



function mapStateToProps({activePost}){
    return {
       activePost
    }
}

export default connect(mapStateToProps)(PostDetails);