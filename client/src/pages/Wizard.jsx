import React, { useState, useContext } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
import { AppContext } from '../context/AppContext';

const schema = {
  goals: {
    Component: Step1,
    next: 'dueDate'
  },
  dueDate: {
    Component: Step2,
    next: 'categories'
  },
  categories: {
    Component: Step3,
    // pretending this is the submit
    next: 'milestones'
  },
  milestones: {
    Component: Step4,
    next: null
  }
};

const Wizard = () => {
  const [activeFormId, setActiveFormId] = useState('goals');
  const { formData, setFormData } = useContext(AppContext);
  const handleSelect = (choice) => {
    const updatedFormData = { ...formData, [activeFormId]: choice };
    setFormData(updatedFormData);

    const formSchema = schema[activeFormId];

    if (formSchema.next) {
      setActiveFormId(formSchema.next);
    } else {
      console.log('pretend i am submitng this data here', updatedFormData);
    }
  };

  const { Component: Form } = schema[activeFormId];

  return <Form formData={formData} handleSelect={handleSelect} />;
};

export default Wizard;
