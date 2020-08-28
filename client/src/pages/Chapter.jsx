import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, ProgressBar, Button } from 'react-bootstrap';
import DailyTaskList from '../components/DailyTaskList';

const Chapter = ({ history }) => {
  const { currentChapter, currentStory } = useContext(AppContext);
  if (!currentChapter || !currentStory) history.push('/dashboard');

  const progress =
    2 + (currentChapter?.index * 100) / currentStory?.chapters.length;

  const handleClick = (event) => {
    history.push('/addReflection');
  };

  return (
    <Container className="d-flex flex-column">
      <h1 style={{ textAlign: 'center' }}>Goal Book</h1>
      <div>
        <h2>Chapter: {currentChapter?.index + 1}</h2>
        <h2>Total Chapters: {currentStory?.chapters.length}</h2>
      </div>
      <h2>Goal progress board</h2>
      <ProgressBar now={progress} />
      <DailyTaskList />
      <h2>Reflections</h2>
      <Button onClick={handleClick}>Add a reflection</Button>
    </Container>
  );
};

export default Chapter;
