import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import moment from 'moment';

// dailyTask: {
//     done: { type: Boolean, default: false },
//     lastUpdated: { type: Date }
//   },
//   bonus: {
//     done: { type: Boolean, default: false },
//     lastUpdated: { type: Date }
//   },
//   reflected: {
//     done: { type: Boolean, default: false },
//     lastUpdated: { type: Date }

const DailyTaskList = () => {
  const { currentChapter, currentStory } = useContext(AppContext);
  const [taskState, setTaskState] = useState();

  useEffect(() => {
    currentStory &&
      axios
        .patch(`/api/stories/${currentStory._id}`, taskState, {
          withCredentials: true
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.toString()));
  }, [taskState, currentStory]);

  const shouldTaskUpdate = (taskDate) => {
    if (moment(taskDate).isSame(Date.now(), 'day')) {
      return false;
    }
    return true;
  };

  if (shouldTaskUpdate(currentStory?.dailyTask.lastUpdated)) {
    setTaskState({ dailyTask: { lastUpdated: Date.now(), done: false } });
  }
  if (shouldTaskUpdate(currentStory?.reflected.lastUpdated)) {
    setTaskState({ reflected: { lastUpdated: Date.now(), done: false } });
  }
  if (shouldTaskUpdate(currentStory?.bonus.lastUpdated)) {
    setTaskState({ bonus: { lastUpdated: Date.now(), done: false } });
  }

  const handleChange = (task) => {
    setTaskState({
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
