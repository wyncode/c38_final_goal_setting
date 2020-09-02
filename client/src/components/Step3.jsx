import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
const allCategories = {
  fitness: [
    'Run a 10K',
    'Lift Your Bodyweight',
    'Learn to Surf',
    'Beef Up Your Squat'
  ],
  education: [
    'Master Basic Skills',
    'Become a Critical Thinker',
    'Bulid Good Study Habits',
    'Earn a Degree or Certification'
  ],
  career: [
    'Get a Promotion',
    'Become an Expert in Your Field',
    'Start Your Own Business',
    'Boost Your Networking Abilities'
  ],
  social: [
    'Volunteer',
    'Making Donations',
    'Develop Empathy',
    'Make New Friends'
  ],
  finance: [
    'Buy a House',
    'Pay Off Debt',
    'Build an Emergency Fund',
    'Save For a Vacation'
  ],
  health: [
    'Achieve a Healthy Weight',
    'Eat more Plant Based Foods',
    'Self Care',
    'Sleep a Little More'
  ]
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
