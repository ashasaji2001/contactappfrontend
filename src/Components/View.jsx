import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';




function View() {

  const base_url='http://localhost:8000'
const[employeeData,setEmployeeData]=useState({})
  const {id}=useParams()
  console.log(id);

  const getEmployee=async(id)=>{
    const result=await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.user);
    setEmployeeData(result.data.user)
  }

  useEffect(()=>{
    getEmployee(id)
  },[])


  return (
    <div style={{ marginLeft: "350px" }}>
      <div style={{ width: "850px", height: "450px" }} className='container p-4 m-4  shadow '>
        <MDBCard   >
          <MDBRow className=''>
            <MDBCol md='6'>
              <MDBCardImage width={"100%"} height={'380px'} src='https://www.bing.com/th/id/OGC.4518f9cf9c4a8f06ec74bac53781e898?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f786290%2fscreenshots%2f3400043%2fmedia%2f6dc3ca6e911e0bbdc870b31f5d28cb54.gif&ehk=t4eM596834yXTVa07ooM%2bFZNuxdiiQs3RzdNTnJcz14%3d' alt='...' />
            </MDBCol>
            <MDBCol md='6'>
              <MDBCardBody>
                <MDBCardTitle>User Details</MDBCardTitle>
                <MDBCardText>
                  <div>
                    <MDBListGroup style={{ minWidth: '12rem' }} light>
                      <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
                        User ID:{employeeData.id}
                      </MDBListGroupItem>
                      <MDBListGroupItem noBorders className='px-3'>
                        firstName:{employeeData.firstname}
                      </MDBListGroupItem>
                      <MDBListGroupItem noBorders className='px-3'>
                        LastName:{employeeData.lastname}
                      </MDBListGroupItem>
                      <MDBListGroupItem noBorders className='px-3'>
                        Email:{employeeData.email}
                      </MDBListGroupItem>
                      <MDBListGroupItem noBorders className='px-3'>
                        Phone:{employeeData.phone}
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </div>



                </MDBCardText>
                <MDBCardText>
                  <div>
                    <a className='btn btn-success' href='/'>Back To Home</a>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  )
}

export default View
