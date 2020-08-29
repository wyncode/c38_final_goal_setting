import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
  return (
    <Container className="nav">
      <Navbar collapseOnSelect bg="lg" expand="xlg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="dropdown">
          <NavDropdown.Item>
            <AnchorLink offset="300" href="#createAGoal">
              <p>Create a Goal</p>
            </AnchorLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <AnchorLink offset="350" href="#howItWorks">
              <p>How it works</p>
            </AnchorLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Login">
            <p>Login</p>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/SignUp">
            <p>Register</p>
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
