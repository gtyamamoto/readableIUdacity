




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
         this.props.deletePost(id)
         this.props.history.push(`/`)

   }
   handleVotePost = (e)=>{
      const id = e.target.getAttribute('post-id');
      
      this.props.votePost(id,e.target.id)
   }
   componentDidMount(){
      const {editable} = this.props;
      const {postId} = this.props.match.params;
      if(editable) this.props.getComments(postId)

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
         <h5>Comments : {post.commentCount}</h5>
         <ul className="list">
            <li id="upVote" post-id={post.id} class="dib ba pa2" onClick={this.handleVotePost}>UpVote</li>
              <li  id="downVote" post-id={post.id} class="dib ml4 ba pa2" onClick={this.handleVotePost}>DownVote</li>
         {!editable ? (<NavLink to={`/${post.category}/${post.id}`}>View Post</NavLink>) : (<div>
            
           
              <li  class="link" onClick={this.handleDelete}>Delete</li>
              <li><NavLink to={`/edit/post/${post.id}`}>Edit</NavLink></li>
              
        
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
    </ul>
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
const mapDispatchToProps = dispatch => {
   return {
     getComments: (id) => {
       dispatch({type:GET_COMMENTS_REQUEST,id})
     },
     votePost: (id,option)=>{
       dispatch({type:VOTE_POST,id,option})
     },
     deletePost :(id)=>{
        dispatch({type:DELETE_POST_REQUEST,id})
     }
   };
 };

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post));