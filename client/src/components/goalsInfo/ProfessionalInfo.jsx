import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Nav from '../Nav';

const ProfessionalInfo = ({ history }) => {
  return (
    <div>
      <Container>
        <div>
          <Nav cross="/" />
        </div>
        <Jumbotron className="goals-info">
          <div className="ilustration">
            <Image
              className="info-pic"
              src={require('../images/professional.png')}
            />
          </div>

          <div className="info">
            <div>
              <h5>Professional</h5>
              <p>
                There are many ways You can improve your career status. Let us
                help you with your path.
              </p>
              <h5>Examples</h5>
              <p>
                Boost Network
                <br />
                Gain New Skillsets
                <br />
                Field Expertise
              </p>
            </div>
            <div className="info-btn-flex">
              <Button
                variant="flat"
                className="info-btn"
                onClick={() => history.push('/wizard')}
              >
                Create Goal
              </Button>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default ProfessionalInfo;
