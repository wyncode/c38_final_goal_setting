import React, { useContext, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import { AppContext } from './../../context/AppContext';
import moment from 'moment';

const DailyTaskList = () => {
  const { currentMilestone, currentGoal, updateDailyTask } = useContext(
    AppContext
  );

  const handleChange = (task) => {
    updateDailyTask(currentGoal._id, {
      [task]: { lastUpdated: Date.now(), done: !currentGoal[task].done }
    });
  };

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
    updateDailyTask(currentGoal?._id, data);
  }, [currentGoal, updateDailyTask]);

  const shouldTaskUpdate = (taskDate) => {
    if (moment(taskDate).isSame(Date.now(), 'day')) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <h2>Daily Tasks</h2>
      <Form>
        <div className="daily-task">
          <div style={{ textAlign: 'left' }}>
            <Form.Label>{currentMilestone?.data.description}</Form.Label>{' '}
          </div>
          <div>
            <Form.Check
              style={{ textAlign: 'right' }}
              onChange={() => handleChange('dailyTask')}
              type="checkbox"
              defaultChecked={currentGoal?.dailyTask.done}
            />
          </div>
        </div>

        <div className="daily-task">
          <div style={{ textAlign: 'left' }}>
            <Form.Label>Reflect on daily task</Form.Label>
          </div>
          <div>
            <Form.Check
              style={{ textAlign: 'right' }}
              onChange={() => handleChange('reflected')}
              type="checkbox"
              defaultChecked={currentGoal?.reflected.done}
            />
          </div>
        </div>

        <div className="daily-task">
          <div style={{ textAlign: 'left' }}>
            <Form.Label>
              {currentGoal?.bonus?.description || 'Add a daily challenge'}
            </Form.Label>
          </div>
          <div>
            <Form.Check
              style={{ textAlign: 'right' }}
              onChange={() => handleChange('bonus')}
              type="checkbox"
              defaultChecked={currentGoal?.bonus.done}
            />
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default DailyTaskList;
