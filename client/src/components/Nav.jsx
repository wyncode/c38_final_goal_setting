import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';

const Nav = () => {
  return (
    <Container className="nav-1">
      <Link className="profile-icon" as={Link} to="/">
        <VscArrowLeft size="30px" color="grey" />
      </Link>

      <h3>StoryLine</h3>

      <Link className="profile-icon" as={Link} to="/">
        <VscClose size="30px" color="grey" />
      </Link>
    </Container>
  );
};
export default Nav;
