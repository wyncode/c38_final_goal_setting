import React, { useState, useContext, useEffect } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Step4 = ({ handleSelect }) => {
  const { formData } = useContext(AppContext);
  const history = useHistory();
  const [milestones, setMilestones] = useState([{}, {}, {}, {}, {}, {}]);

  const setDueDates = (deadline) => {
    let end = moment(formData.dueDate);

    let totalDays = end.diff(moment(), 'days');

    const interval = totalDays / milestones.length;
    let sum = interval;
    milestones.forEach((milestone, index, milestoneArray) => {
      milestoneArray[index] = {
        ...milestoneArray[index],
        dueDate: moment().add(sum, 'days').format()
      };

      sum = sum + interval;
    });
  };

  useEffect(() => {
    formData && setDueDates(formData.duedate);
  }, [formData]);

  const handleChange = (event) => {
    event.preventDefault();
    milestones[event.target.name] = {
      ...milestones[event.target.name],
      description: event.target.value
    };
  };
  const handleSave = (event) => {
    event.preventDefault();
    handleSelect(milestones);
  };
  const handleBonusChange = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <div>
        <Nav />
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
              {milestones.map((_, index) => {
                return (
                  <Form.Group>
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
              <button
                onClick={() => history.push('/dashboard')}
                className="btn-part4"
                type="submit"
              >
                <p>Submit</p>
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Step4;
