import React, { useState, useContext } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const schema = {
  category: {
    Component: Step1,
    next: 'dueDate'
  },
  dueDate: {
    Component: Step2,
    next: 'description'
  },
  description: {
    Component: Step3,

    next: 'milestones'
  },
  milestones: {
    Component: Step4,
    next: null
  }
};

const Wizard = ({ history }) => {
  const [activeFormId, setActiveFormId] = useState('category');
  const { formData, setFormData } = useContext(AppContext);
  const handleSelect = (choice) => {
    const updatedFormData = { ...formData, [activeFormId]: choice };
    setFormData(updatedFormData);

    const formSchema = schema[activeFormId];

    if (formSchema.next) {
      setActiveFormId(formSchema.next);
    } else {
      axios
        .post('/api/goals', updatedFormData, { withCredentials: true })
        .then((response) => {})
        .catch((error) => console.log(error));
      history.push('/dashboard');
    }
  };

  const { Component: Form } = schema[activeFormId];

  return <Form formData={formData} handleSelect={handleSelect} />;
};

export default Wizard;
