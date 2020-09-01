import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { Image } from 'react-bootstrap';
const Reflection = ({ history }) => {
  const { currentReflection } = useContext(AppContext);
  if (!currentReflection) history.push('/dashboard');
  return (
    <Container className="d-flex flex-column align-items-center">
      <div>
        <h2>{currentReflection?.title}</h2>
        <h2>{currentReflection?.emoji}</h2>
      </div>
      <Image className="w-75" src={currentReflection?.image} />
      <p>{currentReflection?.notes}</p>
    </Container>
  );
};

export default Reflection;
