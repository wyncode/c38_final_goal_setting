import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from '../Nav';

const FinanceInfo = () => {
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
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default FinanceInfo;
