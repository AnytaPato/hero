import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/"><h1>HERO APP</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
    <Nav className="mr-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="#pricing">Buscador</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header;

