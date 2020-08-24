import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';
import { BsPerson } from 'react-icons/bs';

const Navigation = () => {
  return (
    <Container className="nav">
      <Navbar collapseOnSelect bg="lg" expand="xlg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <NavDropdown.Item href="">Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">My Story</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Community</NavDropdown.Item>
        </Navbar.Collapse>
      </Navbar>
      <h3>Story____</h3>
      <button>
        <BsPerson href="link" size="45px" color="grey" />
      </button>
    </Container>
  );
};
export default Navigation;
