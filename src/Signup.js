import React from 'react'
import axios from 'axios'
function Signup() {
    let obj={firstName:"",lastName:"",age:""}
    async function ab(e)
    {
        e.preventDefault()
        obj.firstName=document.getElementById("firstName").value
        obj.lastName=document.getElementById("lastname").value
        obj.age=document.getElementById("age").value
        
        let res=await axios.post("https://dummyjson.com/users/add",obj)
        localStorage.setItem("user_id",res.data.id)
        window.location.href="/"
    }
  return (
    <div>
        <form onSubmit={ab}>
            Enter first name:<input type="text" className='form-control' id="firstName"/>
            Enter lastName:<input type="text" className='form-control' id="lastname"/>
            Enter age:<input type="text" className='form-control' id="age"/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Signup