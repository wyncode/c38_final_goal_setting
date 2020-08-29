import React from 'react';
import moment from 'moment';

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
    <div>
      <h2>Step 2: Goal length</h2>
      {dueDate.map((dueDate, index) => (
        <button key={index} onClick={() => handleClick(dueDate)}>
          {dueDate}
        </button>
      ))}
    </div>
  );
};

// var moment = require('moment');
// var futureMonth = moment().add(1, 'M').format('DD-MM-YYYY');

export default Step2;
