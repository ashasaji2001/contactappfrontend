
import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {

  const [uid,setId] =useState("")
  const [ufirstname,setfirstname] =useState("")
  const [ulastname,setlastname] =useState("")
  const [uemail,setemail] =useState("")
  const [uphone,setphone] =useState("")



//get a particular id from url
  const {id}=useParams()
  console.log(id);
//get particular details
const getEmployee=async(id)=>{
  const result=await axios.get(`${base_url}/get-an-employee/${id}`)
  console.log(result.data.user);

setId(result.data.user.id)
setfirstname(result.data.user.firstname)
setlastname(result.data.user.lastname)
setemail(result.data.user.email)
setphone(result.data.user.phone)


}
useEffect(()=>{
  getEmployee(id)
},[])

const location = useNavigate()
//api call to upade an employee details
const base_url='http://localhost:8000'

const updateEmployee=async(e)=>{
  e.preventDefault()
  const body={
    id:uid,
    firstname:ufirstname,
    lastname:ulastname,
    email:uemail,
    phone:uphone
  }
  const result = await axios.post(`${base_url}/update-an-employee/${id}`,body)
  console.log(result);
  alert(result.data.message)
  location('/')
}




  return (
    <div>
        <div>
      <br />
      <div className='container shadow card text-center  p-5 w-50'>
        <h2>Edit Users</h2>
        <form className='p-4'>
          <div>

          <MDBInput onChange={(e)=>setId(e.target.value)}  value={uid}  label='ID' id='formControlLg'type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setfirstname(e.target.value)} value={ufirstname} label='First Name'  id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setlastname(e.target.value)} label='Last Name' value={ulastname} id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setemail(e.target.value)} label='email' value={uemail} id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setphone(e.target.value)}  label='Phone no' value={uphone} id='formControlLg' type='text' size='lg' />
            <br />
            {/* <MDBInput onChange={(e)=>setplace(e.target.value)} label='Place' id='formControlLg' type='text' size='lg' /> */}
            <br />
           <div>
            <button onClick={(e)=>updateEmployee(e)} className='btn btn-success m-4'>Update <i className='fa-solid fa-user-plus'></i></button>
           </div>
          </div>
        </form>

      </div>
    </div>
    </div>
  )
}

export default Edit