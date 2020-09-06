import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Nav from '../Nav';

const HealthInfo = ({ history }) => {
  return (
    <div>
      <Container>
        <div>
          <Nav cross="/" />
        </div>
        <Jumbotron className="goals-info">
          <div className="ilustration">
            <Image className="info-pic" src={require('../images/health.png')} />
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
            <div className="info-btn-flex">
              <Button className="info-btn" as={Link} to="/wizard">
                Create Goal
              </Button>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default HealthInfo;
