import React, { useEffect, useContext } from 'react';
import { Image, Container } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import GoalTile from '../components/dashboard/GoalTile';
import { Link } from 'react-router-dom';
import DailyTaskButton from '../components/dashboard/DailyTaskButton';

const Dashboard = () => {
  const {
    setGoals,
    currentUser,
    goals,
    setReloadTasks,
    reloadTasks,
    updateDailyTask
  } = useContext(AppContext);

  useEffect(() => {
    reloadTasks &&
      axios
        .get('/api/goals?sortBy=dueDate:asc', { withCredentials: true })
        .then((response) => {
          setGoals(response.data);
          setReloadTasks(false);
        })
        .catch((error) => console.log(error));
  }, [reloadTasks, setReloadTasks, setGoals]);

  if (!currentUser) return null;

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Image
        style={{ width: '150px' }}
        src={currentUser?.avatar || '../resources/images/default_avatar.png'}
        roundedCircle
      />
      <h2>{currentUser?.name}</h2>
      <h2>Daily Tasks</h2>
      <div className="d-flex flex-wrap">
        {goals?.map((goal) => {
          return (
            <DailyTaskButton
              key={goal._id}
              goal={goal}
              updateDailyTask={updateDailyTask}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <h2>Current Goals</h2>
        <Link to="/wizard">Add New Goal</Link>
      </div>
      {goals?.map((goal) => {
        return !goal?.completed && <GoalTile key={goal._id} goal={goal} />;
      })}
      <h2 className="text-left w-100">Completed Goals</h2>
      {goals?.map((goal) => {
        return goal?.completed && <GoalTile key={goal._id} goal={goal} />;
      })}
    </Container>
  );
};

export default Dashboard;
