import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const FitnessInfo = () => {
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
              <h5>Fitness</h5>
              <p>
                We help you meet your fitness goals. You can pick from our
                suggestions to get you started
              </p>
              <h5>Examples</h5>
              <p>
                Run 5k
                <br />
                Lose Weight
                <br />
                Walking Routine
              </p>
            </div>
            <div className="info-btn-flex">
              <button className="info-btn">
                <Link className="info-btn-txt">Create Goal</Link>
              </button>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default FitnessInfo;
