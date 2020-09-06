import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const SocialInfo = ({ history }) => {
  return (
    <div>
      <Container>
        <div>
          <Nav cross="/" />
        </div>
        <Jumbotron className="goals-info">
          <div className="ilustration">
            <Image className="info-pic" src={require('../images/social.png')} />
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
            <div className="info-btn-flex">
              <Button
                variant="flat"
                className="info-btn"
                as={Link}
                to="/wizard"
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

export default SocialInfo;
