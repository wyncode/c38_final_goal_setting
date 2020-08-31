import React, { useState, useContext } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import Image from 'react-bootstrap/Image';
import Nav from './Nav';
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
              <button className="btn-part4" type="submit">
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
