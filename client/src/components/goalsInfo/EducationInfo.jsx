import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const EducationInfo = ({ history }) => {
  return (
    <Container>
      <div>
        <Nav cross="/" />
      </div>
      <Jumbotron className="goals-info">
        <div className="ilustration">
          <Image
            className="info-pic"
            src={require('../images/education.png')}
          />
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
          <div className="info-btn-flex">
            <Button className="info-btn" as={Link} to="/wizard">
              Create Goal
            </Button>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default EducationInfo;
