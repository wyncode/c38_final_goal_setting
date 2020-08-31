import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
const allCategories = {
  fitness: ['fitness-1', 'fitness-2', 'fitness-3', 'fitness-4'],
  education: ['education-1', 'education-2', 'education-3', 'education-4'],
  career: ['career-1', 'career-2', 'career-3', 'career-4'],
  social: ['social-1', 'social-2', 'social-3', 'social-4'],
  finance: ['finance-1', 'finance-2', 'finance-3', 'finace-4'],
  health: ['health-1', 'health-2', 'health-3', 'health-4']
  // fill in the rest of the goals here
};

const Step3 = ({ handleSelect, formData }) => {
  const relevantCategories = allCategories[formData.goals.toLowerCase()];

  return (
    <Container>
      <div>
        <Nav />
      </div>
      <h5 className="steps">Step 3: Set Goal</h5>
      <p className="steps">
        What are you trying to achieve?
        <br />
        Pick an end goal
      </p>
      <div className="step3">
        <div className="ilustration-step3">
          <Image
            className="info-pic"
            src={require('../components/images/booklover.png')}
          />

          <div className="btn-flex-step3">
            <div>
              {relevantCategories.map((Categories, index) => (
                <button
                  className="wizard-btn3"
                  key={index}
                  onClick={() => handleSelect(Categories)}
                >
                  {Categories}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Step3;
