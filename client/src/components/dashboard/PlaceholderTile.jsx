import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BsArrow90DegDown } from 'react-icons/bs';

const PlaceholderTile = () => {
  return (
    <Card className="current-goal">
      <Card.Body className="p-1 m-1">
        <Row className="d-flex justify-content-center">
          <div className="ml-auto pl-4">
            <Col>Let's get started, add a goal here</Col>
          </div>
          <div className="ml-auto pr-4">
            <Col>
              <BsArrow90DegDown className="rotate" size={20} />
            </Col>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PlaceholderTile;
