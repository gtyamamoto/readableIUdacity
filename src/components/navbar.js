import React from "react";
import { NavLink } from "react-router-dom";
export default props => {
    const {categories} = props;
   
  return (
    <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav className="f6 fw6 ttu tracked">
     
          <NavLink to="/" exact className="link dim white dib mr3">
            Home
          </NavLink>
      
          
        
        <div class="hide-child absolute   white dib">Categories
    <div class="child absolute  mt1">
        {categories.map(category=> <NavLink to={`/category/${category}`} className="link white db bg-black-90 pv2 pr2">
            {category}

          </NavLink>)}
    </div>
  </div>
  <NavLink to="/" className="link dim white dib mr3 fr">
           PostIt
          </NavLink>
     
    </nav>
    </header>
  
  );
};
