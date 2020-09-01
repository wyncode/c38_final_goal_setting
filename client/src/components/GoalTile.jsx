import React, { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { getCurrentMilestoneObj } from '../utilities/index';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const GoalTile = ({ goal }) => {
  const { setCurrentMilestone, setCurrentGoal } = useContext(AppContext);
  const history = useHistory();
  const [theme, setTheme] = useState(null);

  const goToMilestone = (milestonesArr, parentGoal) => {
    setCurrentMilestone(getCurrentMilestoneObj(milestonesArr));
    setCurrentGoal(parentGoal);
    history.push('/milestone');
  };

  const getGoalTileTheme = (category) => {
    switch (category) {
      case 'Fitness':
        return { color: '#92E3CE', icon: 'Replace ME' };
      case 'Education':
        return { color: '#F0DC75', icon: 'Replace ME' };
      case 'Finance':
        return { color: '#FFA8A7', icon: 'Replace ME' };
      case 'Professional':
        return { color: '#B77153', icon: 'Replace ME' };
      case 'Social':
        return { color: '#FF725E', icon: 'Replace ME' };
      case 'Health':
        return { color: '#F0DC75', icon: 'Replace ME' };
      default:
        return { color: '#8546D4', icon: 'Replace ME' };
    }
  };

  useEffect(() => {
    setTheme(getGoalTileTheme(goal.category));
  }, [goal]);

  return (
    <Card
      className="btn btn-default btn-block"
      onClick={() => goToMilestone(goal.milestones, goal)}
    >
      <Card.Body className="p-1 m-1">
        <Row>
          <Col>{theme?.icon}</Col>
          <Col>{goal.category} Goal</Col>
          <Col
            className="d-flex justify-content-end"
            style={{ textAlign: 'right' }}
          >
            <div
              className="circle mr-0"
              style={{ backgroundColor: theme?.color }}
            ></div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GoalTile;
