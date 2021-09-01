import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const  Footer = () => {
    return (
        <div>
          <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
    <Nav className="mr-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll>
        <Navbar.Brand href="/"><h1>HERO APP</h1></Navbar.Brand>
      <Nav.Link href="https://github.com/AnytaPato/hero">Copyright AnytaPato GitHub</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>   
        </div>
    )
}

export default  Footer;
