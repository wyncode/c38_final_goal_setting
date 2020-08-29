import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';

const Navigation = () => {
  return (
    <Container className="nav">
      <Navbar collapseOnSelect bg="lg" expand="xlg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="dropdown">
          <NavDropdown.Item as={Link} to="/CreateGoal">
            Create a goal
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/HowItWorks">
            How it works
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Login">
            Login
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/SignUp">
            Register
          </NavDropdown.Item>
        </Navbar.Collapse>
      </Navbar>
      <h3>StoryLine</h3>

      <Button className="profile-icon" as={Link} to="/Profile">
        <BsPerson size="45px" color="grey" />
      </Button>
    </Container>
  );
};
export default Navigation;
