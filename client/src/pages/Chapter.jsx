import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Container, ProgressBar, Button, Card } from 'react-bootstrap';

const Chapter = () => {
  const { currentChapter, currentStory } = useContext(AppContext);
  const history = useHistory();
  const progress =
    ((currentChapter?.currentIndex + 1) * 100) / currentStory?.chapters.length;
  console.log(progress);

  if (!currentChapter) history.push('/dashboard');
  console.log(currentStory);

  return (
    <Container className="d-flex flex-column">
      <h1 style={{ textAlign: 'center' }}>Goal Book</h1>
      <div>
        <h2>Chapter: {currentChapter?.currentIndex + 1}</h2>
        <h2>Total Chapters: {currentStory?.chapters.length}</h2>
      </div>
      <h2>Goal progress board</h2>
      <ProgressBar now={progress} />
      <h2>Daily Tasks</h2>
      {currentChapter?.description}
      <h2>Reflections</h2>
      <Button>Add a reflection</Button>
    </Container>
  );
};

export default Chapter;
