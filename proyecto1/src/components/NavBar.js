import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/NavBar'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import CartWidget from './CartWidget.js'

function NavBar() {
  return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>            
           <Navbar.Brand href="#home">Home</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Nav.Link href="#features" >Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features2" >Features2</Nav.Link>
              </Nav>
           </Navbar.Collapse> 
            <CartWidget/>                                                                
            </Container>        
          </Navbar>
  )  
}                                                                  
export default NavBar