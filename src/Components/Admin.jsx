import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
// import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Admin() {

  //Api fetching get all employee details

  const base_url='http://localhost:8000'

  
    //to hold array of data
    const [AllUsers,setAllUsers]=useState([])

    const fetchData=async()=>{
             const result = await axios.get(`${base_url}/get-all-employee`)
             console.log(result.data.users);
             setAllUsers(result.data.users)
    }
    console.log(AllUsers);
  
  


const deleteEmp=async(id)=>{
  const result = await axios.delete(`${base_url}/delete-an-employee/${id}`)
  console.log(result);
  alert(result.data.message)
  fetchData()
}





    useEffect(()=>{
      fetchData()
    },[])
    





  return (
    <div>
      <div>
        <h1 className='text-center text-primary m-4'>Stay In Touch🤝</h1>


        

        <div>
          <Carousel>
            <Carousel.Item >
              {/* <ExampleCarouselImage text="First slide" /> */}
              <img width={'100%'} src="https://media.istockphoto.com/id/1688578381/photo/contact-us-telephone-envelope-letter-and-e-mail-symbols-on-wooden-round-in-row-on-table-with.webp?b=1&s=170667a&w=0&k=20&c=FaGQdXfMLV6SgHLLG70p41UkUocD0G7831VeLY1B0WI=" alt="" />
              <Carousel.Caption>
                <h3 className=''>Stay In Touch </h3>
                <p className='text-primary'>A Contact Us page is a useful webpage on a website that encourages visitors to communicate with the website’s owners.</p>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>
        </div>
        <br />

        <div className='container'>
          <p style={{ textAlign: "justify" }}>
            A Contact Us page is a useful webpage on a website that encourages visitors to communicate with the website’s owners. This page typically contains various contact methods, such as email addresses, phone numbers, and sometimes physical addresses.A Contact Us page is where website visitors can get in touch with the website owner. It provides contact info like emails, phone numbers, addresses, and often a form for easy communication and questions.
          </p>
        </div>
        <br />
        <br />
        <Link to={'/add'}>
<div>
          <a className='btn btn-primary text-center m-5' style={{float:"right"}} href="">Add</a>
        </div>
</Link>
<h2 className='text-center m-3' >Our Users🙋‍♂️</h2>
        {/* //table */}
       <div>
       <div className='container'>
              <MDBTable align='middle'>
                <MDBTableHead>
                  <tr>
                 
                    <th scope='col'>Id</th>
                    <th scope='col'></th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone No</th>
                    {/* <th scope='col'>Place</th> */}
                    <th scope='col'>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
               
                
          {
            AllUsers.map(item=>(
              // <Col sm={10} md={6} lg={5} xl={12}>
             
             <tr>
              
                    <td>
                    <div className='d-flex align-items-center'>
             
            </div>
                     {item.id}
                      
                    </td>
                    <td>
              <img
                src='https://th.bing.com/th/id/OIP.jTaF3gP5iIxNztccSqbemwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
            />
              </td>
                    <td>
                      {item.firstname}
                    </td>
                    <td>
                      {item.lastname}
                    </td>
                    <td>
                     {item.email}
                    </td>
                    <td>
                      {item.phone}
                    </td>


                    {/* <td> */}
                      {/* {item.city} */}
                    {/* </td> */}



                    <td>
                      <div className='d-flex justify-content-evenly'>
                        <Link to={`view/${item.id}`}>
                        <i class="fa-solid fa-eye text-primary"></i>
                        </Link>
                        <Link to={`edit/${item.id}`}>
                        <i className='fa-solid fa-pen text-primary'></i>

                        </Link>
                        
                        <i onClick={()=>deleteEmp(item.id)}  className='fa-solid fa-trash text-primary'></i>

                       
                      </div>
                    </td>
                  </tr>





            // </Col>
            ))
          }
        {/* </Row> */}
    
                </MDBTableBody>
              </MDBTable>
            </div>

       </div>
      </div>
    </div>
  )
}

export default Admin