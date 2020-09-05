import React, { useContext, useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Nav from '../components/Nav';
import { AppContext } from '../context/AppContext';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import moment from 'moment';
import axios from 'axios';
import { getCurrentMilestoneObj } from '../utilities';

const EditGoal = ({ history }) => {
  const {
    currentGoal,
    setReloadTasks,
    setCurrentGoal,
    setCurrentMilestone
  } = useContext(AppContext);

  const [updates, setUpdates] = useState(currentGoal);
  const [redoDates, setRedoDates] = useState(false);
  if (!currentGoal) history.push('/dashboard');

  useEffect(() => {
    const end = moment(updates.dueDate);
    const totalDays = end.diff(moment(currentGoal.createdAt), 'days');
    let interval = totalDays / updates.milestones.length;
    let sum = 0;
    if (interval < 1) interval = 1;
    const milestonesUpdates = updates.milestones.map(
      (_, index, milestoneArray) => {
        sum = sum + interval;
        return {
          ...milestoneArray[index],
          dueDate: moment(currentGoal.createdAt).add(sum, 'days').format()
        };
      }
    );
    let due = {};
    if (interval === 1) {
      due = {
        dueDate: moment(currentGoal.createdAt)
          .add(sum, 'days')
          .format('YYYY-MM-DD')
      };
    }

    setRedoDates(false);
    setUpdates({ ...updates, ...due, milestones: milestonesUpdates });
  }, [redoDates, currentGoal.createdAt]);

  useEffect(() => {
    setUpdates(
      (({ dueDate, milestones, description, bonus }) => ({
        dueDate,
        milestones,
        description,
        bonus
      }))(currentGoal)
    );
  }, [currentGoal]);

  const handleSave = (event) => {
    event.preventDefault();
    axios
      .patch(`/api/goals/${currentGoal._id}`, updates, {
        withCredentials: true
      })
      .then((resp) => {
        setReloadTasks(true);
        setCurrentGoal(resp.data);
        setCurrentMilestone(getCurrentMilestoneObj(resp.data.milestones));
        history.push('/milestone');
      })
      .catch((error) => console.log(error.toString()));
  };

  const handleChange = (event) => {
    setUpdates({ ...updates, [event.target.name]: event.target.value });
    setRedoDates(true);
  };

  const handleMilestoneChange = (event) => {
    const updateArray = [...updates.milestones];
    updateArray[event.target.name] = {
      ...updateArray[event.target.name],
      description: event.target.value
    };
    setUpdates({ ...updates, milestones: updateArray });
  };

  const handleBonusChange = (event) => {
    setUpdates({
      ...updates,
      bonus: { description: event.target.value }
    });
  };

  const handleMinusClick = () => {
    if (updates.milestones.length > 1) {
      setUpdates({
        ...updates,
        milestones: updates?.milestones.slice(0, updates?.milestones.length - 1)
      });
      setRedoDates(true);
    }
  };

  const handlePlusClick = () => {
    if (updates.milestones.length <= 30) {
      setUpdates({
        ...updates,
        milestones: [...updates?.milestones, { description: '' }]
      });
      setRedoDates(true);
    }
  };

  return (
    <Container>
      <Nav />
      <Form onSubmit={handleSave}>
        <h5 className="steps">Edit Your Goal</h5>
        <p className="steps"></p>
        <Form.Group>
          <Form.Label htmlFor="description">Title</Form.Label>
          <Form.Control
            id="description"
            type="text"
            name="description"
            value={updates?.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Due Date</Form.Label>
          <Form.Control
            id="dueDate"
            type="date"
            name="dueDate"
            value={updates?.dueDate}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex">
          <Form.Label htmlFor="milestone">Milestones</Form.Label>
          <div className="btn p-1 ml-auto">
            <VscChromeMinimize onClick={handleMinusClick} size={20} />
          </div>
          <div className="btn p-1">
            <VscAdd onClick={handlePlusClick} size={20} />
          </div>
        </div>
        {updates?.milestones?.map((milestone, index) => {
          return (
            <Form.Group key={index}>
              <Form.Control
                className="milestone"
                type="text"
                onChange={handleMilestoneChange}
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
