import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/NavBar'
import { Nav } from 'react-bootstrap'
function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home" className="">Cerveza Capitan!</Navbar.Brand>
        <Nav>
            <Nav.Link href="productos">Productos</Nav.Link>
            <Nav.Link href="Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="Contactanos">Contactanos</Nav.Link>
        </Nav>
    </Navbar> 
  )   
}                                                                   

export default App