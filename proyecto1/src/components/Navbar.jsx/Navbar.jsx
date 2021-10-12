import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/NavBar'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Barra = ({carrito}) => {

    //carrito => lo recibi desde el <Main/> como parametro , sirve para mostrar cantidad de articulos en el carrito 
    // tengo que pasar al <CardWidget/> por que ahi es donde muestro la cantidad 

    
  return (
 //   <nav id="navbar" className="navbar fixed-top navbar-light bg-dark">
 //     <div className="container-fluid">
 //       <span className="text-light navbar-brand">Navbar</span>
 //       <CardWidget carrito={carrito} />
//      </div>
//    </nav>

//  );
//};

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>            
           <Navbar.Brand href="#home" id="navbar">Home</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Nav.Link href="#features" >Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features2" >Features2</Nav.Link>
              </Nav>
           </Navbar.Collapse> 
            <CardWidget carrito={carrito} />                                                                
            </Container>        
          </Navbar>
  )  
}                        

export default Barra;