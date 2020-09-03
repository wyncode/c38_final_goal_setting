import React, { useState, useEffect, useContext } from 'react';
import { getCurrentMilestoneObj } from './../../utilities/index';
import { AppContext } from './../../context/AppContext';
import { shouldTaskUpdate } from './../../utilities/index';

const DailyTaskButton = ({ goal }) => {
  const [dailyTaskDesc, setDailyTaskDesc] = useState();
  const { updateDailyTask } = useContext(AppContext);
  const [doneClass, setDoneClass] = useState();

  if (shouldTaskUpdate(goal.dailyTask.lastUpdated))
    updateDailyTask(goal._id, { done: false, lastUpdated: Date.now() });

  useEffect(() => {
    let mileObj = getCurrentMilestoneObj(goal.milestones);
    setDailyTaskDesc(mileObj.data.description);
    setDoneClass(!goal.dailyTask.done);
  }, [dailyTaskDesc, goal]);

  const handleClick = () => {
    updateDailyTask(goal._id, {
      dailyTask: { done: !goal.dailyTask.done, lastUpdated: Date.now() }
    });
    setDoneClass(!doneClass);
  };

  return (
    <div>
      <div
        className={
          doneClass
            ? 'taskButton d-flex align-items-center justify-content-center'
            : 'doneTaskButton'
        }
        onClick={handleClick}
      >
        <span>{doneClass && dailyTaskDesc}</span>
      </div>
    </div>
  );
};

export default DailyTaskButton;
