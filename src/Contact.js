import React from 'react'
import Navbar from './Navbar'
import {Link,Outlet} from 'react-router-dom'
function Contact() {
  return (
    <div>
      <Navbar/>
      <Link to ="/contact/mobile">Mobile</Link>
      <br/>
      <Link to ="/contact/email">Email</Link>
      <Outlet/>
    </div>
  )
}

export default Contact