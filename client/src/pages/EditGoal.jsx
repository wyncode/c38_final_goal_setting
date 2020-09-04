import React, { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Nav from '../components/Nav';
import { AppContext } from '../context/AppContext';

const EditGoal = () => {
  const { currentGoal } = useContext(AppContext);
  const handleSave = () => {};
  const handleChange = () => {};
  const handleBonusChange = () => {};
  return (
    <Container>
      <div>
        <Nav />
      </div>
      <div>
        <h5 className="steps">Edit Goal</h5>
        <p className="steps">Edit your goal</p>
      </div>
      <div className="addMilestone">
        <div>
          <div>
            <Form onSubmit={handleSave}>
              {currentGoal?.milestones?.map((milestone, index) => {
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
              <Form.Group>
                <Form.Control
                  className="Bonus"
                  type="text"
                  onChange={handleBonusChange}
                  name="bonus"
                  value={currentGoal?.bonus?.description}
                />
              </Form.Group>
              <Button className="btn-part4" type="submit">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditGoal;
