import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import _ from 'lodash'
import { handleInitialData } from "../actions/shared";
import ErrorPage from './errorPage'
import PostDetails from "./postDetails";
import Navbar from "./navbar";
import Main from './main';
import LoadingBar from "react-redux-loading";
import "./App.css";
import "vtex-tachyons";
import PostEditor from "./postEditor";
import AddPostBtn from './fixedButton'
class App extends Component {
  componentDidMount() {
    //fetch posts and categories from the api
    handleInitialData();
  }
 
  render() {
    const { loading, categories,posts } = this.props;
    return (
      <div>
      <BrowserRouter>
      <Fragment>
  
        <LoadingBar />
        {!loading && (
          <Fragment>
            <Navbar categories={categories}/>
            <Fragment>
                <Route path="/" exact component={Main} />
    
                <Route path="/:categoryId/:postId" exact  render={(props)=>{
                  let findPost = posts[props.match.params.postId]
                  if(!findPost) return <ErrorPage />
                  return <PostDetails {...props}/>
                }} />
               
                <Route path="/edit/post/:id" component={PostEditor} />
                <Route exact path="/:categoryId"  render={(props) => {
                  if(props.match.params.categoryId==='newpost')
                  return (<PostEditor {...props}/>)
                  if(props.match.params.categoryId==='error')
                  return (<ErrorPage />)
                  return (
                    <Main key={props.match.params.categoryId} {...props} />)
                }
                 
} />
               
              </Fragment>
          </Fragment>
        )}
          <AddPostBtn />     
      </Fragment>
     
      </BrowserRouter>
      
      </div>
    );
  }
}

function mapStateToProps({ categories,posts }) {
  
  return {
    // only will set loading to false when all the categories and posts are loaded
    posts,
    loading: !categories || _.isEmpty(posts),
    categories
  };
}

export default connect(mapStateToProps)(App);
