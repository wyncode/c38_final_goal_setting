import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import { AppContext } from './../../context/AppContext';

const ReflectionTile = ({ reflection }) => {
  const history = useHistory();
  const { setCurrentReflection } = useContext(AppContext);

  const handleClick = () => {
    setCurrentReflection(reflection);
    history.push('/reflection');
  };
  return (
    <Container>
      <Form className="reflections" onClick={handleClick}>
        <div className="reflection">
          <span>{reflection?.title}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="emoji">{reflection?.emoji}</span>
        </div>
      </Form>
    </Container>
  );
};

export default ReflectionTile;
