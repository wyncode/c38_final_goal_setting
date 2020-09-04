import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Nav from '../components/Nav';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const EditGoal = () => {
  const { currentGoal } = useContext(AppContext);
  const history = useHistory();
  const [updates, setUpdates] = useState(currentGoal);
  if (!currentGoal) history.push('/dashboard');

  const handleSave = () => {};
  const handleChange = () => {};
  const handleBonusChange = () => {};
  const handleMinusClick = () => {
    setUpdates({
      ...updates,
      milestones: updates?.milestones.slice(0, updates?.milestones.length - 1)
    });
  };
  const handlePlusClick = () => {
    setUpdates({ ...updates, milestones: [...updates?.milestones, {}] });
  };
  return (
    <Container>
      <Nav />
      <Form onSubmit={handleSave}>
        <h5 className="steps">Edit Your Goal</h5>
        <p className="steps"></p>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Edit your due date</Form.Label>
          <Form.Control
            id="dueDate"
            type="date"
            name="dueDate"
            value={updates?.dueDate}
            onChange={handleChange}
          />
        </Form.Group>
        <p className="steps">Edit your milestones</p>
        <AiOutlinePlus onClick={handlePlusClick} />
        <AiOutlineMinus onClick={handleMinusClick} />
        {updates?.milestones?.map((milestone, index) => {
          return (
            <Form.Group key={index}>
              <Form.Control
                className="milestone"
                type="text"
                onChange={handleChange}
                name={index}
                key={index}
                value={milestone?.description}
                required
              />
            </Form.Group>
          );
        })}
        <p>Bonus</p>
        <Form.Group>
          <Form.Control
            className="Bonus"
            type="text"
            onChange={handleBonusChange}
            name="bonus"
            value={updates?.bonus?.description}
          />
        </Form.Group>
        <Button className="btn-part4" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditGoal;
