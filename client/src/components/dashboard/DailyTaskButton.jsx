import React, { useState, useEffect, useContext } from 'react';
import { getCurrentMilestoneObj } from './../../utilities/index';
import { AppContext } from './../../context/AppContext';
import { shouldTaskUpdate } from './../../utilities/index';
import moment from 'moment';
import { Button } from 'react-bootstrap';

const DailyTaskButton = ({ goal }) => {
  const [dailyTaskDesc, setDailyTaskDesc] = useState();
  const { updateDailyTask, reloadTasks } = useContext(AppContext);
  const [doneClass, setDoneClass] = useState();
  let data = null;
  if (shouldTaskUpdate(goal?.dailyTask.lastUpdated)) {
    data = {
      dailyTask: { lastUpdated: moment().format(), done: false }
    };
  }
  if (shouldTaskUpdate(goal?.reflected.lastUpdated)) {
    data = {
      ...data,
      reflected: { lastUpdated: moment().format(), done: false }
    };
  }
  if (shouldTaskUpdate(goal?.bonus.lastUpdated)) {
    data = {
      ...data,
      bonus: { lastUpdated: moment().format(), done: false }
    };
  }
  if (data) updateDailyTask(goal?._id, data);

  useEffect(() => {
    let mileObj = getCurrentMilestoneObj(goal.milestones);
    setDailyTaskDesc(mileObj?.data?.description);
    setDoneClass(!goal.dailyTask.done);
  }, [dailyTaskDesc, goal]);

  const handleClick = () => {
    updateDailyTask(goal._id, {
      dailyTask: { done: !goal.dailyTask.done, lastUpdated: Date.now() }
    });
    setDoneClass(!doneClass);
  };

  return (
    <Button
      bsPrefix={
        doneClass
          ? 'taskButton d-flex align-items-center justify-content-center'
          : 'doneTaskButton'
      }
      disabled={reloadTasks}
      onClick={!reloadTasks ? handleClick : null}
    >
      <span>{doneClass && dailyTaskDesc}</span>
    </Button>
  );
};

export default DailyTaskButton;
