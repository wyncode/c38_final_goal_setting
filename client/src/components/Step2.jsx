import React from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
const dueDate = ['3 Months', '6 Months', '1 Year', '2 Years'];

const getMonths = (time) => {
  switch (time) {
    case '3 Months':
      return 3;
    case '6 Months':
      return 6;
    case '1 Year':
      return 12;
    case '2 Years':
      return 24;
    default:
      return 12;
  }
};

const Step2 = ({ handleSelect }) => {
  const handleClick = (date) => {
    const deadLine = moment().add(getMonths(date), 'M').format();
    handleSelect(deadLine);
  };

  return (
    <Container>
      <div>
        <Nav cross="/" />
      </div>
      <h5 className="steps">Step 2: Goal length</h5>
      <div className="wizard">
        <div className="ilustrations-wizard">
          <div>
            <Image
              className="ilustration-step2-1"
              src={require('../components/images/3months.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step2-1"
              src={require('../components/images/6months.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step2"
              src={require('../components/images/1year.png')}
            />
          </div>
          <div>
            <Image
              className="ilustration-step2"
              src={require('../components/images/2years.png')}
            />
          </div>
        </div>
        <div className="btn-flex">
          <div>
            {dueDate.map((dueDate, index) => (
              <button
                className="wizard-btn2"
                key={index}
                onClick={() => handleClick(dueDate)}
              >
                <p>{dueDate}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

// var moment = require('moment');
// var futureMonth = moment().add(1, 'M').format('DD-MM-YYYY');

export default Step2;
