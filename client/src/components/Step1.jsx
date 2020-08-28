import React from 'react';

const goals = ['Fitness', 'Education', 'Career', 'Social', 'Finance', 'Health'];

const Step1 = ({ handleSelect }) => {
  return (
    <div>
      <h2>Step 1: Choose your goal type</h2>
      {goals.map((goal, index) => (
        <button key={index} onClick={() => handleSelect(goal)}>
          {goal}
        </button>
      ))}
    </div>
  );
};

export default Step1;
