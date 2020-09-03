import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscGear } from 'react-icons/vsc';

const Nav1 = () => {
  return (
    <Container className="nav-1">
      <Link className="profile-icon" as={Link} to="/Profile">
        <VscArrowLeft size="30px" color="grey" />
      </Link>

      <h3>StoryLine</h3>

      <Link className="profile-icon" as={Link} to="/">
        <VscGear size="30px" color="grey" />
      </Link>
    </Container>
  );
};
export default Nav1;
