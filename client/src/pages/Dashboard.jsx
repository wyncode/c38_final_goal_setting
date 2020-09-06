import React, { useEffect, useContext } from 'react';
import { Container, Jumbotron, Image } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import GoalTile from '../components/dashboard/GoalTile';
import { Link } from 'react-router-dom';
import Nav1 from '../components/Nav1';
import DailyTaskButton from '../components/dashboard/DailyTaskButton';
import PlaceholderTile from '../components/dashboard/PlaceholderTile';
import Img from 'react-cool-img';
const Dashboard = ({ history }) => {
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
        .catch((error) => console.log(error.toString()));
  }, [reloadTasks, currentReflection, setReloadTasks, setGoals]);

  if (!currentUser) return null;

  return (
    <Container className="">
      <div>
        <Nav1 />
      </div>
      <div>
        <Jumbotron className="dashboard-user">
          <div className="username">
            <h3>{currentUser?.name}</h3>
          </div>
          <div className="dash-pic">
            <Img
              className="wa h-100"
              src={
                currentUser?.avatar ||
                require('../resources/images/default_avatar.png')
              }
              onClick={() => history.push('/profile')}
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
          {goals?.length !== 0 ? (
            goals?.map((goal) => {
              return (
                !goal?.completed && <GoalTile key={goal._id} goal={goal} />
              );
            })
          ) : (
            <PlaceholderTile />
          )}
          <h2 className="text-left w-100">Completed Goals</h2>
          {goals?.map((goal) => {
            return goal?.completed && <GoalTile key={goal._id} goal={goal} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
