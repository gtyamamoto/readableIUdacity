

import React,{Component} from 'react';
import {connect} from 'react-redux';
import { POST_COMMENT_REQUEST } from '../actions/comments';


//component to create a new comment for a single post
class newComment extends Component{
    state = {
        active : true,
        author:'',
        body:''
    }
    closeHandle() {
        this.setState({
            active: false,
        });
      }
      handleAuthor = (e)=> {
        this.setState({
            author: e.target.value,
        });
      }
      handleBody = (e)=> {
        this.setState({
            body: e.target.value,
        });
      }
      submitComment = (e)=>{

        if(!this.state.author) return alert('Author Cant be Empty')
        if(!this.state.body) return alert('Body of comment cant be empty')
        const {body,author} = this.state;
        const {parentID,createComment} = this.props;
        
       createComment(body,author,parentID
        )
      }
    render(){
        let {author,body} = this.state;
        return(
            <div>
                 {this.state.active &&
                 <div className="newcomment pa4 ba tc">
                <div className="absolute closebtn top-0 right-0" onClick={this.closeHandle}>X</div>
                <h3>New Comment</h3>

                  <div className="ba pa3 ">
                    <div className=" db input-field">
                    <label for="author" class="dib">Author:</label>
                    <input id="author" type="text" class="input-reset"
                      value={author}
                      onChange={this.handleAuthor}
                    ></input>
                    </div>
                    <div className="db mt4 input-field">
                    <label class="v-mid dib" for="bodyComment">Body:</label>
                    <textarea id="bodyComment"
                    onChange={this.handleBody}
                    type="text" class="v-mid input-reset"
                      value={body}
                    />
                    </div>
                    <br></br>
                    <button onClick={this.submitComment} className="ph7 db postBtn">Post It</button>
                  </div>  

                </div>
                }
            </div>
        )
    }
}


function mapStateToProps({activePost}){
    return{
        parentID:activePost.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
      createComment: (body,author,parentID) => {
        dispatch({type:POST_COMMENT_REQUEST,body,author,parentID})
      },
    
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(newComment)