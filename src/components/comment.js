import React, { Component } from "react";
import {
  VOTE_COMMENT,
  UPDATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST
} from "../actions/comments";
import { connect } from "react-redux";

class Comment extends Component {
  state = {
    editable: false,
    text: ""
  };
  handleEditComment = e => {
    this.setState({ editable: true, text: this.props.comment.body });
  };
  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleDelete = e => {
    const { id } = this.props.comment;
    this.props.deleteComment( id);
  };
  handleVoteComment = e => {
    const { id } = this.props.comment;

    this.props.voteComment(
      id,e.target.getAttribute("typevote")
    );
  };
  updateComment = e => {
    const { id } = this.props.comment;

    this.props.updateComment(
      id,
  this.state.text
    );
    this.setState(() => ({
      editable: false
    }));
  };

  render() {
    const { comment } = this.props;
    const { editable, text } = this.state;
    return (
      <div className="comment ba bw3 mt3 pa3 db">
        {!editable ? (
          <p className="comment-content">{comment.body}</p>
        ) : (
          <div>
            <textarea
              placeholder="What's on your mind?"
              value={text}
              onChange={this.handleChange}
              className="textarea"
            />
            <button onClick={this.updateComment}>Confirm</button>
          </div>
        )}
        <h5 className="comment-author">Author: {comment.author}</h5>
        <p className="comment-date">
          {new Date(comment.timestamp).toUTCString()}
        </p>
        <h5>Votescore : {comment.voteScore}</h5>
        <ul className="list">
          <li
            typevote="upVote"
            class="dib ba pa2"
            onClick={this.handleVoteComment}
          >
            UpVote
          </li>
          <li
            typevote="downVote"
            class="dib ml4 ba pa2"
            onClick={this.handleVoteComment}
          >
            DownVote
          </li>
          <li onClick={this.handleDelete}>Delete</li>
          <li onClick={this.handleEditComment}>Edit</li>
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateComment: (id,body) => {
      dispatch({type:UPDATE_COMMENT_REQUEST,id,body})
    },
    voteComment: (id,option)=>{
      dispatch({type:VOTE_COMMENT,id,option})
    },
    deleteComment :(id)=>{
      dispatch({type:DELETE_COMMENT_REQUEST,id})
    }
  };
}
export default connect(null,mapDispatchToProps)(Comment);
