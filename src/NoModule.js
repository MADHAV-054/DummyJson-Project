import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoModule() {
    let navigate=useNavigate()
  return (
    <div>
        <h1>404 NOT FOUND</h1>
        <button onClick={()=>{navigate("/")}}>Back to Home</button>
    </div>
  )
}

export default NoModule