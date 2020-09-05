import React, { useEffect, useContext } from 'react';
import { Image, Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import GoalTile from '../components/dashboard/GoalTile';
import { Link } from 'react-router-dom';
import Nav1 from '../components/Nav1';
import DailyTaskButton from '../components/dashboard/DailyTaskButton';
import Img from 'react-cool-img';

const Dashboard = () => {
  const {
    setGoals,
    currentUser,
    goals,
    setReloadTasks,
    reloadTasks,
    updateDailyTask,
    currentReflection
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
  }, [reloadTasks, currentReflection, setReloadTasks, setGoals]);

  if (!currentUser) return null;

  return (
    <Container className="dashboard">
      <div>
        <div>
          <Nav1 />
        </div>
        <div>
          <Jumbotron className="dashboard-user">
            <div className="username">
              <h3>{currentUser?.name}</h3>
            </div>
            <div>
              <Img
                className="dash-pic"
                src={currentUser?.avatar}
                placeholder={require('../resources/images/default_avatar.png')}
              />
            </div>
          </Jumbotron>
        </div>
        <div className="daily-tasks">
          <div>
            <h2>Daily Tasks</h2>
          </div>
        </div>
        <div className="done">
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
        <br />
        <div className="current-goals">
          <div>
            <h2>Current Goals</h2>
          </div>
          <div className="add-new">
            <Link to="/wizard">Add New Goal</Link>
          </div>
        </div>
        <div className="goals">
          <div>
            {goals?.map((goal) => {
              return (
                !goal?.completed && <GoalTile key={goal._id} goal={goal} />
              );
            })}
            <h2 className="text-left w-100">Completed Goals</h2>
            {goals?.map((goal) => {
              return goal?.completed && <GoalTile key={goal._id} goal={goal} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
