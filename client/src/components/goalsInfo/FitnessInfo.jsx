import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const FitnessInfo = ({ history }) => {
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
              src={require('../images/fitness.png')}
            />
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

export default FitnessInfo;
