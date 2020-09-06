import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const FinanceInfo = ({ history }) => {
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
              src={require('../images/finance.png')}
            />
          </div>

          <div className="info">
            <div>
              <h5>Finance</h5>
              <p>
                Learn ways to save your budget and spend wisely with our money
                saving tips and tricks. You can even track your habits in
                StoryLine!
              </p>
              <h5>Examples</h5>
              <p>
                Pay off Debt
                <br />
                Saving for Retirement
                <br />
                Saving for a Vacation
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

export default FinanceInfo;
