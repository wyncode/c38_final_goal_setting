import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Nav from '../Nav';

const FitnessInfo = () => {
  return (
    <div>
      <Container>
        <div>
          <Nav />
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

export default FitnessInfo;
