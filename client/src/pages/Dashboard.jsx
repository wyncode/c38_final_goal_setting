import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import GoalTile from '../components/GoalTile';
const Dashboard = ({ history }) => {
  const {
    setGoals,
    loading,
    currentUser,
    goals,
    setCurrentMilestone,
    setCurrentGoal
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/goals?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setGoals(response.data);
      })
      .catch((error) => console.log(error));
  }, [setGoals, loading]);

  if (!currentUser) return null;
  //const getCatagoryStyle = () => {};

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
      {goals?.map((goal) => {
        return <GoalTile key={goal._id} goal={goal} />;
      })}
      <Button className="btn btn-default btn-block"> Write a goal</Button>
    </Container>
  );
};

export default Dashboard;
