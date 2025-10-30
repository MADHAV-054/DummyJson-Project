import './App.css';
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios'

function App() {
  let[products,setP]=useState([])
  useEffect(()=>{
        async function fetchdata()
        {
          let res=await axios("https://dummyjson.com/products")
          
          setP(res.data.products)
        }
        fetchdata()
  },[])
  return (
    <div>             
        <Navbar/>
      {
        (products)&&(<div>
            {
              products.map((item,ind)=>{
                return(
                  <div className='card' key={ind}>
                      <img src={item.thumbnail}/>
                      <h3>{item.title}</h3>
                      <h4>$:{item.price}</h4>
                      <h5>{item.rating}*</h5>

                  </div>
                )
              })
            }


        </div>)
      }
       
    </div>
  );
}

export default App;