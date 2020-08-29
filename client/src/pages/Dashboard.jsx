import React, { useEffect, useContext } from 'react';
import { Image, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { getCurrentMilestoneObj } from '../utilities/index';

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

  const goToMilestone = (milestonesArr, parentGoal) => {
    setCurrentMilestone(getCurrentMilestoneObj(milestonesArr));
    setCurrentGoal(parentGoal);
    history.push('/milestone');
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Image
        style={{ width: '150px' }}
        src={currentUser?.avatar}
        roundedCircle
        clasname="centered"
      />
      <h2>{currentUser?.name}</h2>
      <Table>
        <tbody>
          {goals?.map((goal) => {
            return (
              <tr key={goal._id}>
                <td>{goal.description}</td>
                <td>
                  <Button
                    className="btn-default btn-block"
                    onClick={() => goToMilestone(goal.milestones, goal)}
                  >
                    Go to milestone
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button className="btn btn-default btn-block"> Write a goal</Button>
    </Container>
  );
};

export default Dashboard;
