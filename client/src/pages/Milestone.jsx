import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, ProgressBar, Button } from 'react-bootstrap';
import DailyTaskList from '../components/dashboard/DailyTaskList';
import ReflectionTile from '../components/dashboard/ReflectionTile';

const Milestone = ({ history }) => {
  const { currentMilestone, currentGoal } = useContext(AppContext);
  if (!currentMilestone || !currentGoal) history.push('/dashboard');
  const progress =
    2 + (currentMilestone?.index * 100) / currentGoal?.milestones.length;

  const handleClick = (event) => {
    history.push('/addReflection');
  };

  return (
    <Container className="d-flex flex-column">
      <h1 style={{ textAlign: 'center' }}>{currentGoal?.category} Goal</h1>
      <div>
        <h2>Current Milestone: {currentMilestone?.index + 1}</h2>
        <h2>Total Milestones: {currentGoal?.milestones.length}</h2>
      </div>
      <h2>Goal progress bar</h2>
      <ProgressBar now={progress} />
      <DailyTaskList />
      <h2>Reflections</h2>
      {currentGoal?.reflections.map((reflection, index) => {
        return <ReflectionTile key={index} reflection={reflection} />;
      })}
      <Button onClick={handleClick}>Add a reflection</Button>
    </Container>
  );
};

export default Milestone;
