import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const location = useNavigate()
  const [id,setId] =useState("")
  const [firstname,setfirstname] =useState("")
  const [lastname,setlastname] =useState("")
  const [email,setemail] =useState("")
  const [phone,setphone] =useState("")
  // const [place,setplace] =useState("")

  const base_url='http://localhost:8000/add-an-employee'

  const addEmployee=async(e)=>{
    e.preventDefault()
    //add user
    console.log(id,firstname,lastname,email,phone);

    //api call add user details
     const body={id,firstname,lastname,email,phone}
     const result=await axios.post(base_url,body).then((result)=>{
      console.log(result);
      alert(result.data.message)
      location('/')
     }).catch((error)=>{
      alert("Enter an Unique User Id")
     })
     
   
  }
  return (
    <div>
      <br />
      <div className='container shadow card text-center  p-5 w-50'>
        <h2>Add New Users</h2>
        <form className='p-4'>
          <div>

          <MDBInput onChange={(e)=>setId(e.target.value)} label='ID' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setfirstname(e.target.value)} label='First Name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setlastname(e.target.value)} label='Last Name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setemail(e.target.value)} label='email' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setphone(e.target.value)} label='Phone no' id='formControlLg' type='text' size='lg' />
            <br />
            {/* <MDBInput onChange={(e)=>setplace(e.target.value)} label='Place' id='formControlLg' type='text' size='lg' /> */}
            <br />
           <div>
            <button onClick={(e)=>addEmployee(e)} className='btn btn-success m-4'>Add <i className='fa-solid fa-user-plus'></i></button>
           </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Add