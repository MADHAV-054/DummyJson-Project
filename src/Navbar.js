import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
function Navbar() {
  let [id, setId] = useState(localStorage.getItem("user_id"))
  return (
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Products</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/blogs">Blogs</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              {
                (id == "1") ? <li onClick={() => { localStorage.removeItem("user_id"); setId(null) }}>Logout</li> :
                (
                  <div><li><NavLink to="/signup">Signup</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li></div>)
              }
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>  
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>)
}

export default Navbar   