import React, { useState, useEffect, useContext } from 'react';
import { getCurrentMilestoneObj } from '../utilities/index';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const DailyTaskButton = ({ goal }) => {
  const [dailyTaskDesc, setDailyTaskDesc] = useState();
  const { currentGoal } = useContext(AppContext);
  useEffect(() => {
    const mileObj = getCurrentMilestoneObj(goal.milestones);
    setDailyTaskDesc(mileObj.data.description);
  }, [goal.milestones, currentGoal]);

  const handleClick = () => {
    console.log(goal._id);
    goal &&
      axios
        .patch(
          `/api/goals/${goal._id}`,
          { dailyTask: { description: !goal.done, lastUpdated: Date.now() } },
          {
            withCredentials: true
          }
        )
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.toString()));
    console.log('clicked');
  };

  return (
    <div
      className={
        !goal.dailyTask.completed
          ? 'taskButton d-flex align-items-center justify-content-center'
          : 'doneTaskButton'
      }
      onClick={handleClick}
    >
      <span>{!goal.dailyTask.completed && dailyTaskDesc}</span>
    </div>
  );
};

export default DailyTaskButton;
