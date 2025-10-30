import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
function Navbar() {
   let[id,setId]=useState(localStorage.getItem("user_id"))
  return (
    <div>
      <ul className='navbar' >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {
            (id!=0)?<li onClick={()=>{setId(0)}}>Logout</li>:(<div><li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink>Login</NavLink></li></div>)
       }
      </ul>
    </div>
  )
}

export default Navbar