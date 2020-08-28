import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../Nav';

const EducationInfo = () => {
  return (
    <Container>
      <div>
        <Nav />
      </div>
      <Jumbotron fluid>
        <div>
          <div className="info-pic"></div>
        </div>

        <div className="info">
          <div>
            <h5>Education</h5>
            <p>
              Education is so important! We help you plan, organize and set the
              pace for your education track
            </p>
            <h5>Examples</h5>
            <p>
              Manage Time
              <br />
              Build Strong Networks
              <br />
              Find Time to Relax
            </p>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default EducationInfo;
