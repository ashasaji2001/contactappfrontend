import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            {/* <img
            //   src='https://cdn1.vectorstock.com/i/1000x1000/90/90/contacts-app-icon-vector-45889090.jpg'
            <i class="fa-solid fa-address-book fa-beat-fade"></i>
              height='30'
              alt=''
              loading='lazy'
            /> */}
            <i class="fa-solid fa-address-book fa-beat-fade m-2"></i>
            Contact App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header