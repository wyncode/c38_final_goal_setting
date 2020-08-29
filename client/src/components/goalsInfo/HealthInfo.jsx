import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Nav from '../Nav';

const HealthInfo = () => {
  return (
    <div>
      <Container>
        <div>
          <Nav />
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
              <button className="info-btn">
                <Link className="info-btn-txt" as={Link} to="/wizard">
                  Create Goal
                </Link>
              </button>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default HealthInfo;
