import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({currentPage, setCurrentPage}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Charles Molitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={() => setCurrentPage('About')}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setCurrentPage('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setCurrentPage('Contact')}>Contact Me</Nav.Link>
            <Nav.Link href="#resume" onClick={() => setCurrentPage('Resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;