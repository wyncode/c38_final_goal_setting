import React, { useState, useContext } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Step4 = ({ handleSelect, formData }) => {
  //     const relevantMilestones = allMilestones[formData.goals.toLowerCase()];
  const [milestones, setMilestones] = useState([{}, {}, {}, {}, {}, {}]);
  const [milestoneData, setMilestoneData] = useState(null);
  //   const { setLoading } = useContext(AppContext);

  //   const handleMilestoneSubmission = async (e) => {
  //     e.preventDefault();
  //     setMilestoneData((milestoneData = e.target));
  //     console.log('handleMilestoneSubmission');
  //   };
  const handleChange = (event) => {
    event.preventDefault();
    milestones[event.target.name] = { description: event.target.value };
    console.log(event.target.key);
    console.log(event.target.value);
    console.log(milestones);
    //setMilestoneData({ ...milestone, [event.target.name]: event.target.value });
  };
  const handleSave = (event) => {
    event.preventDefault();
    handleSelect(milestones);
  };
  return (
    <Container>
      <h2>Milestones</h2>
      <Form onSubmit={handleSave}>
        {milestones.map((_, index) => {
          return (
            <Form.Group>
              <Form.Control
                type="text"
                onChange={handleChange}
                name={index}
                key={index}
                required
              />
            </Form.Group>
          );
        })}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Step4;
