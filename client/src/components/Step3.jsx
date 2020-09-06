import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
import { AppContext } from '../context/AppContext';
const allDescription = {
  fitness: [
    'Run a 10K',
    'Lift Your Bodyweight',
    'Learn to Surf',
    'Beef Up Your Squat'
  ],
  education: [
    'Bulid Good Study Habits',
    'Master Basic Skills',
    'Become a Critical Thinker',
    'Earn a Degree or Certification'
  ],
  professional: [
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
};

const Step3 = ({ handleSelect }) => {
  const { formData } = useContext(AppContext);
  const relevantDescription = allDescription[formData.category.toLowerCase()];
  const [input, setInput] = useState('');
  return (
    <Container>
      <div>
        <Nav cross="/" />
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
              {relevantDescription.map((description, index) => (
                <button
                  className="wizard-btn3"
                  key={index}
                  onClick={() => handleSelect(description)}
                >
                  {description}
                </button>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(input);
                  handleSelect(input);
                }}
              >
                <input
                  type="text"
                  className="wizard-btn3 p-2 no-out text-center"
                  value={input}
                  required
                  placeholder="Type Your Own"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Step3;
