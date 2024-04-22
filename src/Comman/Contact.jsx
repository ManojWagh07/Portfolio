import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NearMeIcon from '@mui/icons-material/NearMe';
import React, { useState } from 'react'
import axios from 'axios'
const Contact = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [msg,setMsg]=useState("")

  let submit= async(e)=>{
    e.preventDefault()

    try{
      alert("submitted")
      await axios.post("http://localhost:8000/",{
        name,email,msg
      })
    }catch(e){
      console.log(e);
    }
  }
  return (

<div className='Contact'>
<section id='Contact Me'>  
  <div className='Contain-Flex'>
  <img src='./Images/Contact Me.png' alt="" />

  <form id="contact-form">
      <h1>Contact me</h1>
    <div className="form-group">
        <label htmlFor="name">Name :-</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder='Enter Name' />
    </div>

    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Id :-</label>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" aria-describedby="emailHelp" placeholder='Enter Email' />
    </div>

    <div className="form-group">
        <label htmlFor="message">Message :-</label>
        <input type="text" onChange={(e)=>{setMsg(e.target.value)}} id="Massage" className="form-control" placeholder='Enter Massage'/>
        
    </div>

    <button type="submit" onClick={submit} id='Send-btn' className="btn btn-warning">Send <NearMeIcon/></button>
  </form>

  </div>
  </section>  
</div>


  )
}


export default Contact