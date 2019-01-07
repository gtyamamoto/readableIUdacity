




import React,{Component} from 'react';
// import _ from 'lodash';
import {DELETE_POST_REQUEST,VOTE_POST} from '../actions/posts'
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import Comment from './comment'
import CommentForm from './newComment'
import { NavLink } from "react-router-dom";
import { GET_COMMENTS_REQUEST } from '../actions/comments';

class Post extends Component{
   
   
   handleDelete = (e)=>{
         const {id} = this.props.post;
         this.props.dispatch({type:DELETE_POST_REQUEST,id})
         this.props.history.push(`/`)

   }
   handleVotePost = (e)=>{
      const {id} = this.props.activePost;
      
      this.props.dispatch({type:VOTE_POST,id,option:e.target.id})
   }
   componentDidMount(){
      const {editable} = this.props;
      const {id} = this.props.match.params;
      if(editable) this.props.dispatch({type:GET_COMMENTS_REQUEST,id:id})

   }
   
   render(){
      //editable will control if it will be editable post ( only in the specific page of a post) or just read only
      const {post,editable} =this.props;
      return (
         <div key={post.id} className="post ba bw3 mt3 pa3 db">
         <h4 className="post-title">{post.title}</h4>
         <h4 className="post-author">{post.author}</h4>
         <p className="post-date">{new Date(post.timestamp).toUTCString()}</p>
         <p className="post-content">{post.body}</p>
         <h5>Votescore : {post.voteScore}</h5>
         
         {!editable ? (<NavLink to={`/post/${post.id}`}>View Post</NavLink>) : (<div>
            
            <ul className="list">
            <li id="upVote" class="dib ba pa2" onClick={this.handleVotePost}>UpVote</li>
              <li  id="downVote" class="dib ml4 ba pa2" onClick={this.handleVotePost}>DownVote</li>
              <li  class="link" onClick={this.handleDelete}>Delete</li>
              <li><NavLink to={`/edit/post/${post.id}`}>Edit</NavLink></li>
              
         </ul>
         <CommentForm />
         
         <h3>Comments</h3>
         <ul className="list">
            {this.props.comments.map(comment=>(
               <li><Comment comment={comment} key={comment.id}/>
               </li>
            ))}
         </ul>
        
         </div>
        )
   }
   </div>
   )
  

}
}
function mapStateToProps({comments,activePost}){
   return {
      comments,
      activePost
   }
}

export default withRouter(connect(mapStateToProps)(Post));