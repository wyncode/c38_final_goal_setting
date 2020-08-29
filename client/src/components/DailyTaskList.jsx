import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import moment from 'moment';

const DailyTaskList = () => {
  const { currentMilestone, currentGoal } = useContext(AppContext);
  const [updates, setUpdates] = useState(null);

  //updates checkboxes on DB
  useEffect(() => {
    currentGoal &&
      axios
        .patch(`/api/goals/${currentGoal._id}`, updates, {
          withCredentials: true
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.toString()));
  }, [updates, setUpdates, currentGoal]);

  //Check if they were comleted today and see if they need to be reset
  useEffect(() => {
    let data = {};

    if (shouldTaskUpdate(currentGoal?.dailyTask.lastUpdated)) {
      data = {
        dailyTask: { lastUpdated: moment().format(), done: false }
      };
    }
    if (shouldTaskUpdate(currentGoal?.reflected.lastUpdated)) {
      data = {
        ...data,
        reflected: { lastUpdated: moment().format(), done: false }
      };
    }
    if (shouldTaskUpdate(currentGoal?.bonus.lastUpdated)) {
      data = {
        ...data,
        bonus: { lastUpdated: moment().format(), done: false }
      };
    }
    setUpdates(data);
  }, [currentGoal]);

  const shouldTaskUpdate = (taskDate) => {
    if (moment(taskDate).isSame(Date.now(), 'day')) {
      return false;
    }
    return true;
  };

  const handleChange = (task) => {
    setUpdates({
      [task]: { lastUpdated: Date.now(), done: !currentGoal[task].done }
    });
  };

  return (
    <>
      <h2>Daily Tasks</h2>
      <Form>
        <Form.Check
          onChange={() => handleChange('dailyTask')}
          type="checkbox"
          defaultChecked={currentGoal?.dailyTask.done}
          label={currentMilestone?.data.description}
        />
        <Form.Check
          onChange={() => handleChange('reflected')}
          type="checkbox"
          defaultChecked={currentGoal?.reflected.done}
          label="Reflect on daily task"
        />
        <Form.Check
          onChange={() => handleChange('bonus')}
          type="checkbox"
          defaultChecked={currentGoal?.bonus.done}
          label="Bonus"
        />
      </Form>
    </>
  );
};

export default DailyTaskList;
