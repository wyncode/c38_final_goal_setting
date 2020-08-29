import React from 'react';

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
    <div>
      <h2>Step 3: Categories</h2>
      {relevantCategories.map((Categories, index) => (
        <button key={index} onClick={() => handleSelect(Categories)}>
          {Categories}
        </button>
      ))}
    </div>
  );
};

export default Step3;
