
import {NavLink} from 'react-router-dom'
import React from 'react'
//action button to create new post
export default ()=>{
    return (
      <div class="fixed bg-green link bg-animate hover-bg-light-blue white f2 bottom-0 right-0 ba pa4 mb2 mr2 br3 shadow-3"><NavLink to="/newpost">New Post</NavLink></div>
    )
  }