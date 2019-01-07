import React,{Component} from 'react';
import {connect} from 'react-redux';
import {GET_POST_REQUEST} from '../actions/posts'
import Post from './post';


class PostDetails extends Component{
   
  
 
   componentDidMount(){
    const {postId} = this.props.match.params;
    const {getPost} = this.props;
    getPost(postId)
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
const mapDispatchToProps = (dispatch)=>{
    return {
        getPost : (id)=>{
            dispatch({type:GET_POST_REQUEST,id})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);