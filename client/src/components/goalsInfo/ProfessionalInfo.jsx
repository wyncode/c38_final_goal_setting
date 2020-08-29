import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../Nav';

const ProfessionalInfo = () => {
  return (
    <div>
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
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default ProfessionalInfo;
