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
    handleInitialData();
  }
 
  render() {
    const { loading, categories } = this.props;
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
               
                <Route path="/post/:id" component={PostDetails} />
                <Route path="/new/post" exact component={PostEditor} />
                <Route path="/edit/post/:id" component={PostEditor} />
               
                <Route path="/error" component={ErrorPage} />
                <Route path="/category/:id" render={(props) => (
  <Main key={props.match.params.id} {...props} />)
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
  console.log(_.isEmpty(posts))
  return {
    loading: !categories || _.isEmpty(posts),
    categories
  };
}

export default connect(mapStateToProps)(App);
