import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Nav from '../Nav';

const SocialInfo = () => {
  return (
    <div>
      <Container>
        <div>
          <Nav />
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

export default SocialInfo;
