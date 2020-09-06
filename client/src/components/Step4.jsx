import React, { useState, useContext, useEffect } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
import moment from 'moment';

const Step4 = ({ handleSelect }) => {
  const { formData, setFormData } = useContext(AppContext);
  const [milestones, setMilestones] = useState([{}, {}, {}, {}, {}, {}]);

  useEffect(() => {
    const end = moment(formData.dueDate);
    const totalDays = end.diff(moment(), 'days');

    const interval = totalDays / milestones.length;
    let sum = 0;
    const milestonesUpdates = milestones.map((_, index, milestoneArray) => {
      sum = sum + interval;
      return {
        ...milestoneArray[index],
        dueDate: moment().add(sum, 'days').format()
      };
    });
    setMilestones(milestonesUpdates);
  }, [formData]);

  const handleChange = (event) => {
    event.preventDefault();
    setMilestones(
      milestones.map((milestone, index) => {
        return Number(event.target.name) === index
          ? { ...milestone, description: event.target.value }
          : milestone;
      })
    );
  };
  const handleSave = (event) => {
    event.preventDefault();
    handleSelect(milestones);
  };
  const handleBonusChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, bonus: { description: event.target.value } });
  };
  return (
    <Container>
      <div>
        <Nav cross="/" />
      </div>
      <div>
        <h5 className="steps">Step 4: Set Milestones</h5>
        <p className="steps">Add your milestones here</p>
      </div>
      <div className="addMilestone">
        <div>
          <div className="ilustration-step4">
            <Image
              className="info-pic"
              src={require('./images/milestone.png')}
            />
          </div>
          <div>
            <Form onSubmit={handleSave}>
              {milestones?.map((_, index) => {
                return (
                  <Form.Group key={index}>
                    <Form.Control
                      className="milestone"
                      type="text"
                      onChange={handleChange}
                      name={index}
                      key={index}
                      required
                    />
                  </Form.Group>
                );
              })}
              <Form.Group>
                <Form.Control
                  placeholder="Daily Bonus Challenge"
                  className="Bonus"
                  type="text"
                  onChange={handleBonusChange}
                  name="bonus"
                />
              </Form.Group>
              <Button variant="flat" className="btn-part4" type="submit">
                <p>Submit</p>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Step4;
