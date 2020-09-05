import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import { VscGear } from 'react-icons/vsc';

const Nav1 = () => {
  const history = useHistory();

  return (
    <Container className="pt-3 pb-4">
      <Navbar sticky="top" bg="white" expand="xlg">
        <Navbar sticky="top">
          <div
            className="profile-icon"
            onClick={() => {
              history.goBack();
            }}
          >
            <VscArrowLeft size="30px" color="grey" />
          </div>
        </Navbar>
        <Navbar.Brand sticky="top" href="/">
          <h3 className="m-0">StoryLine</h3>
        </Navbar.Brand>
        <Navbar sticky="top">
          <div
            className="profile-icon"
            onClick={() => {
              history.push('/profile');
            }}
          >
            <VscGear size="30px" color="grey" />
          </div>
        </Navbar>
      </Navbar>
    </Container>
  );
};
export default Nav1;
