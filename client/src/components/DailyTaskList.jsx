import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import moment from 'moment';

const DailyTaskList = () => {
  const { currentChapter, currentStory } = useContext(AppContext);
  const [updates, setUpdates] = useState(null);

  useEffect(() => {
    currentStory &&
      axios
        .patch(`/api/stories/${currentStory._id}`, updates, {
          withCredentials: true
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.toString()));
  }, [updates, setUpdates, currentStory]);

  useEffect(() => {
    let data = {};

    if (shouldTaskUpdate(currentStory?.dailyTask.lastUpdated)) {
      data = {
        dailyTask: { lastUpdated: moment().format(), done: false }
      };
    }
    if (shouldTaskUpdate(currentStory?.reflected.lastUpdated)) {
      data = {
        ...data,
        reflected: { lastUpdated: moment().format(), done: false }
      };
    }
    if (shouldTaskUpdate(currentStory?.bonus.lastUpdated)) {
      data = {
        ...data,
        bonus: { lastUpdated: moment().format(), done: false }
      };
    }
    setUpdates(data);
  }, [currentStory]);

  const shouldTaskUpdate = (taskDate) => {
    if (moment(taskDate).isSame(Date.now(), 'day')) {
      return false;
    }
    return true;
  };

  const handleChange = (task) => {
    setUpdates({
      [task]: { lastUpdated: Date.now(), done: !currentStory[task].done }
    });
  };

  return (
    <>
      <h2>Daily Tasks</h2>
      <Form>
        <Form.Check
          onChange={() => handleChange('dailyTask')}
          type="checkbox"
          defaultChecked={currentStory?.dailyTask.done}
          label={currentChapter?.data.description}
        />
        <Form.Check
          onChange={() => handleChange('reflected')}
          type="checkbox"
          defaultChecked={currentStory?.reflected.done}
          label="Reflect on daily task"
        />
        <Form.Check
          onChange={() => handleChange('bonus')}
          type="checkbox"
          defaultChecked={currentStory?.bonus.done}
          label="Bonus"
        />
      </Form>
    </>
  );
};

export default DailyTaskList;
