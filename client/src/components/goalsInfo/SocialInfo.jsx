import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../Nav';

const SocialInfo = () => {
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
              <h5>Social</h5>
              <p>
                Become more confident when meeting new people and take
                challenges through this website to enhance your social skills.
              </p>
              <h5>Examples</h5>
              <p>
                Volunteer Activities
                <br />
                Communities
                <br />
                Convo Tracking
              </p>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default SocialInfo;
