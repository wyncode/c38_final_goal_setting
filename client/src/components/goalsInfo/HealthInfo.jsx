import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../Nav';

const HealthInfo = () => {
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
              <h5>Health</h5>
              <p>
                Integrate self care into your lifestyle by staying on top of
                your mental and physical health and getting great sleep
              </p>
              <h5>Examples</h5>
              <p>
                Sleep Tracker
                <br />
                Exercise Log
                <br />
                Meditation
              </p>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default HealthInfo;
