import React, { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { getCurrentMilestoneObj } from '../utilities/index';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosFitness } from 'react-icons/io';
import {
  FcGraduationCap,
  FcMoneyTransfer,
  FcBusinessman,
  FcConferenceCall,
  FcLike
} from 'react-icons/fc';

const GoalTile = ({ goal }) => {
  const { setCurrentMilestone, setCurrentGoal } = useContext(AppContext);
  const history = useHistory();
  const [theme, setTheme] = useState(null);

  //console.log(goal?.dailyTask?.done, goal?.description, 'goalTile dashboard');

  const goToMilestone = (milestonesArr, parentGoal) => {
    setCurrentMilestone(getCurrentMilestoneObj(milestonesArr));
    setCurrentGoal(parentGoal);
    history.push('/milestone');
  };

  const getGoalTileTheme = (category) => {
    switch (category) {
      case 'Fitness':
        return {
          color: '#92E3CE',
          icon: <IoIosFitness size="30px" color="teal" />
        };
      case 'Education':
        return { color: '#F0DC75', icon: <FcGraduationCap size="30px" /> };
      case 'Finance':
        return { color: '#FFA8A7', icon: <FcMoneyTransfer size="30px" /> };
      case 'Professional':
        return {
          color: '#B77153',
          icon: <FcBusinessman size="30px" />
        };
      case 'Social':
        return { color: '#FF725E', icon: <FcConferenceCall size="30px" /> };
      case 'Health':
        return { color: '#F0DC75', icon: <FcLike size="30px" /> };
      default:
        return { color: '#8546D4', icon: 'Replace ME' };
    }
  };

  useEffect(() => {
    setTheme(getGoalTileTheme(goal.category));
  }, [goal]);

  return (
    <Card
      className="current-goal"
      onClick={() => goToMilestone(goal.milestones, goal)}
    >
      <Card.Body className="p-1 m-1">
        <Row className="current-icon-goal">
          <div>
            <Col>{theme?.icon}</Col>
          </div>
          <div>
            <Col>{goal.category} Goal</Col>
          </div>
          <div>
            <Col>
              <div
                className="circle mr-0"
                style={{ backgroundColor: theme?.color }}
              ></div>
            </Col>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GoalTile;
