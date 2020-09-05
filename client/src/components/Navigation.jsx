import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavbarBrand, Dropdown } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/Dropdown';
import Logout from '../components/Logout';
import { Link, useHistory } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
  const history = useHistory();
  return (
    <Container className="pt-3 pb-4">
      <Navbar sticky="top" bg="white" expand="xlg">
        <Navbar.Toggle variant="success" id="dropdown-basic" />
        <Navbar.Brand sticky="top" href="/">
          <h3 className="m-0">StoryLine</h3>
        </Navbar.Brand>
        <Navbar sticky="top">
          <Link className="profile-icon" as={Link} to="/Dashboard">
            <BsPerson size="40px" color="grey" />
          </Link>
        </Navbar>
        <Navbar.Collapse>
          <div style={{ width: '10rem' }}>
            <NavDropdown.Divider />
            <Dropdown.Item as={AnchorLink} offset="300" href="#createAGoal">
              Create a Goal
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item as={AnchorLink} offset="350" href="#howItWorks">
              How it works
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                history.push('/login');
              }}
            >
              Login
            </Dropdown.Item>
            <NavDropdown.Divider />
            <Logout />
            <NavDropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                history.push('/SignUp');
              }}
            >
              Register
            </Dropdown.Item>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default Navigation;
