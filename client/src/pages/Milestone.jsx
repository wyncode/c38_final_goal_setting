import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, ProgressBar, Button } from 'react-bootstrap';
import DailyTaskList from '../components/dashboard/DailyTaskList';
import ReflectionTile from '../components/dashboard/ReflectionTile';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Milestone = ({ history }) => {
  const { currentMilestone, currentGoal } = useContext(AppContext);
  if (!currentMilestone || !currentGoal) history.push('/dashboard');
  const [showMore, setShowMore] = useState(false);
  const [progress, setProgress] = useState();
  const maxItems = 5;

  console.log(progress);
  useEffect(() => {
    const today = moment();
    const start = moment(currentGoal?.createdAt);
    const end = moment(currentGoal?.dueDate);
    setProgress(
      Math.abs((start.diff(today, 'days') * 100) / start.diff(end, 'days'))
    );
  }, [currentGoal, setProgress]);
  return (
    <Container className="d-flex flex-column">
      <h1 style={{ textAlign: 'center' }}>{currentGoal?.description} Goal</h1>
      <button
        className="editButton"
        onClick={() => {
          history.push('/editgoal');
        }}
      >
        Edit
      </button>
      <div>
        <h2>Current Milestone: {currentMilestone?.index + 1}</h2>
        <h2>Total Milestones: {currentGoal?.milestones?.length}</h2>
      </div>
      <h2>Goal progress bar</h2>
      <ProgressBar now={progress} />
      <DailyTaskList />
      <div className="d-flex justify-content-between align-items-center w-100">
        <h2>Reflections</h2>
        <Link to="/addreflection">Add New Reflection</Link>
      </div>
      {currentGoal?.reflections
        ?.slice(0)
        ?.reverse()
        ?.map((reflection, index) => {
          return showMore || index < maxItems ? (
            <ReflectionTile key={reflection._id} reflection={reflection} />
          ) : null;
        })}
      {currentGoal?.reflections?.length > maxItems && (
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show More' : 'Show Less'}
        </Button>
      )}
    </Container>
  );
};

export default Milestone;
