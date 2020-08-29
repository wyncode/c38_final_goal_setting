import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const ReflectionTile = ({ title, emoji }) => {
  return (
    <Card className="p-1 m-1">
      <Card.Body className="p-1 m-1">
        <Row>
          <Col>
            <span>{title}</span>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <span>{emoji}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReflectionTile;
