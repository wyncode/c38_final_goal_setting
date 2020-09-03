import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
  return (
    <Container className="nav">
      <Navbar sticky="top" bg="white" expand="xlg">
        <Navbar.Toggle variant="success" id="dropdown-basic" />
        <Navbar.Collapse>
          <NavDropdown.Divider />
          <AnchorLink offset="300" href="#createAGoal">
            <p>Create a Goal</p>
          </AnchorLink>

          <NavDropdown.Divider />

          <AnchorLink offset="350" href="#howItWorks">
            <p>How it works</p>
          </AnchorLink>

          <NavDropdown.Divider />
          <Link as={Link} to="/Login">
            <p>Login</p>
          </Link>
          <NavDropdown.Divider />
          <Link as={Link} to="/SignUp">
            <p>Register</p>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Navbar sticky="top">
        <h3>StoryLine</h3>
      </Navbar>
      <Navbar sticky="top">
        <Link className="profile-icon" as={Link} to="/Dashboard">
          <BsPerson size="40px" color="grey" />
        </Link>
      </Navbar>
    </Container>
  );
};
export default Navigation;
