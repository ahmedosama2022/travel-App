import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navber.css';

const NavBar = () => {

   
  return (
    <section className='heade'>
        <Navbar style={{backgroundColor: "white" , height:"70px"}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsZKb6SD4ZA7SMgnVn7FLz3kSXRPGiW8-kw&usqp=CAU' style={{width: "80px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' ,color:"rgb(0, 115, 168)" }}
            navbarScroll
          >
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action1">Home</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action2">packages</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action2">Shop</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action2">Apout</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action2">News</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#action2">Contact</Nav.Link>
            <Nav.Link style={{ color:"rgb(0, 115, 168)" , fontWeight:"bold", marginLeft:"30px"}} href="#" disabled>
              pages
            </Nav.Link>
          </Nav>
        
            <Button variant="outline-success" style={{color:"white", marginBottom:"20px"}}>Book Now</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </section>
  )
}

export default NavBar