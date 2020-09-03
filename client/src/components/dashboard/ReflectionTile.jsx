import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { AppContext } from './../../context/AppContext';

const ReflectionTile = ({ reflection }) => {
  const history = useHistory();
  const { setCurrentReflection } = useContext(AppContext);

  const handleClick = () => {
    setCurrentReflection(reflection);
    history.push('/reflection');
  };
  return (
    <Card className="reflectionTile p-1 m-1" onClick={handleClick}>
      <Card.Body className="p-1 m-1">
        <Row>
          <Col>
            <span>{reflection?.title}</span>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <span>{reflection?.emoji}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReflectionTile;
