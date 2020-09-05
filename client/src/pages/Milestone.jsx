import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, ProgressBar, Button, Image } from 'react-bootstrap';
import DailyTaskList from '../components/dashboard/DailyTaskList';
import ReflectionTile from '../components/dashboard/ReflectionTile';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Milestone = ({ history }) => {
  const { currentMilestone, currentGoal } = useContext(AppContext);
  if (!currentMilestone || !currentGoal) history.push('/dashboard');
  const [showMore, setShowMore] = useState(false);
  const [progress, setProgress] = useState(0);
  const maxItems = 5;

  useEffect(() => {
    const today = moment();
    const start = moment(currentGoal?.createdAt);
    const end = moment(currentGoal?.dueDate);
    if (end.isBefore(today)) setProgress(100);
    else
      setProgress(
        Math.abs((start.diff(today, 'days') * 100) / start.diff(end, 'days'))
      );
  }, [currentGoal, setProgress]);
  return (
    <Container>
      <div className="m-pic">
        <Image
          className="milestone-pic"
          src={require('../components/images/fitness.png')}
        />
      </div>
      <h3 style={{ textAlign: 'center' }}>{currentGoal?.description}</h3>
      <button
        className="editButton"
        onClick={() => {
          history.push('/editgoal');
        }}
      >
        Edit
      </button>
      <div className="milestones">
        <div className="current-m">
          <div>
            <h2>Current Milestone:</h2>
          </div>
          <div>
            <h2>{currentMilestone?.index + 1}</h2>
          </div>
        </div>
        <div className="total-m">
          <div>
            <h2>Total Milestones: </h2>
          </div>
          <div>
            <h2>{currentGoal?.milestones.length}</h2>
          </div>
        </div>

        <div className="p-bar">
          <h2>Goal progress bar</h2>
          <ProgressBar className="bar" variant="info" now={progress} />
        </div>

        <DailyTaskList />
        <div className="reflection-t">
          <div>
            <h2>Reflections</h2>
          </div>
          <div>
            <Link to="/addreflection">Add New Reflection</Link>
          </div>
        </div>
        <div className="refections">
          {currentGoal?.reflections
            .slice(0)
            .reverse()
            .map((reflection, index) => {
              return showMore || index < maxItems ? (
                <ReflectionTile key={reflection._id} reflection={reflection} />
              ) : null;
            })}
        </div>
        <div className="show-more">
          {currentGoal?.reflections?.length > maxItems && (
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show More' : 'Show Less'}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Milestone;
