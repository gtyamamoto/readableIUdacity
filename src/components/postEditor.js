import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import { UPDATE_POST_REQUEST, CREATE_POST_REQUEST } from '../actions/posts';
class PostEditor extends Component{

    state = {
        author : !this.props.post ? '' : this.props.post.author,
        body:!this.props.post ? '' : this.props.post.body,
        title:!this.props.post ? '' : this.props.post.title,
        category:this.props.categories[0]
    }
  handleTitle = (e)=>{
        this.setState({
            title : e.target.value
        })
  }
  postHandle =  ()=>{
      const {post,updatePost,addPost} = this.props;
      const {body,title,category,author} = this.state;
      //when post exists, it will update a post, so it will redirect to the post page otherwise it will redirect to the category of the created post
        if(post){
            updatePost(post.id,body,title,category,author)
            this.props.history.push(`/post/${post.id}`)
            
        }else{
            addPost(body,title,category,author)
            this.props.history.push(`/${category}`)
        }




  }
  handleCategory = (e)=>{
    this.setState({
        category : e.target.value
    })
}
  handleAuthor = (e)=>{
    this.setState({
        author : e.target.value
    })
}
handleBody = (e)=>{
    this.setState({
        body : e.target.value
    })
}
  render(){
    const {author,body,title,category} = this.state;
    const {post,categories} = this.props;
    console.log(post)
      return (
           <div className="container">
          <div className="posts tc pt7">
            <h2>{post ? 'Edit Post' : 'New Post'}</h2>
            <div className="post-form form ba pa4 mt2">
            <div className=" db input-field">
                  <label for="title" className="dib">Title:</label>
                  <input id="title" type="text" className="input-reset"
                    value={title}
                    onChange={this.handleTitle}
                   
                  ></input>
                  </div>
                  <div className=" db input-field mt2">
                  <label for="category" className="dib">Category:</label>
                  <select id="category" 
                    value={category}
                    onChange={this.handleCategory}
                   
                  >{categories.map(category=>(<option value={category}>{category}</option>))}</select>
                  </div>
            <div className=" db input-field mt4">
                  <label for="author" class="dib">Author:</label>
                  <input id="author" type="text" class="input-reset"
                    value={author}
                    
                   onChange = {this.handleAuthor}
                  ></input>
                  </div>
            <div className="db mt4 input-field">
                  <label className="v-mid dib" for="bodyComment">Body:</label>
                  <textarea id="bodyComment"
                  onChange={this.handleBody}
                  type="text" className="v-mid input-reset"
                    value={body}
                  />
                  </div>
                  <br></br>
                  <button className="ph7 db postBtn" onClick={this.postHandle}>Post It</button>
            </div>
        </div>
        </div>
       
        
      )
  }

}
function mapStateToProps ({categories,posts,activePost},props){
    const {id} = props.match.params;
    
    return {
      
        categories,
        activePost,
        post : id ? posts[id] : null
    }
}
const mapDispatchToProps = dispatch => {
    return {
      updatePost: (id,body,title,category,author) => {
        dispatch({type:UPDATE_POST_REQUEST,id,body,title,category,author})
      },
      addPost: (body,title,category,author)=>{
        dispatch({type:CREATE_POST_REQUEST,body,title,category,author})
      }
    };
  };
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostEditor));