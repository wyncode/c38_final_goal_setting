import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import GoalTile from '../components/GoalTile';
import { Link } from 'react-router-dom';

const Dashboard = ({ history }) => {
  const { setGoals, loading, currentUser, goals } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/goals?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setGoals(response.data);
      })
      .catch((error) => console.log(error));
  }, [setGoals, loading]);

  if (!currentUser) return null;

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Image
        style={{ width: '150px' }}
        src={currentUser?.avatar}
        roundedCircle
        clasname="centered"
      />
      <h2>{currentUser?.name}</h2>
      <br />
      <div className="d-flex justify-content-between align-items-center w-100">
        <h2 class="d-inline-block">Current Goals</h2>
        <Link class="d-inline-block">Add New Goal</Link>
      </div>
      {goals?.map((goal) => {
        return goal && <GoalTile key={goal._id} goal={goal} />;
      })}
      <h2 className="text-left w-100">Completed Goals</h2>
    </Container>
  );
};

export default Dashboard;
