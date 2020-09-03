import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import Image from 'react-bootstrap/Image';
import Nav from './Nav';

const goals = ['Fitness', 'Education', 'Career', 'Social', 'Finance', 'Health'];

const Step1 = ({ handleSelect }) => {
  return (
    <Container>
      <div>
        <Nav />
      </div>
      <h5 className="steps">Step 1: Choose your goal type</h5>
      <div className="wizard">
        <div className="ilustrations-wizard">
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/fitness.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/education.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/professional.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/social.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/finance.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step1"
              src={require('../components/images/health.png')}
            />
          </div>
        </div>
        <div className="btn-flex">
          <div>
            {goals.map((goal, index) => (
              <button
                className="wizard-btn1"
                key={index}
                onClick={() => handleSelect(goal)}
              >
                <p>{goal}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Step1;
