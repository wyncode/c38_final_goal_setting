import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Chapter = () => {
  const { currentChapter } = useContext(AppContext);
  const history = useHistory();
  if (!currentChapter) history.push('/dashboard');
  return (
    <div>
      <h2>Chapters</h2>
      {currentChapter?.description}
    </div>
  );
};

export default Chapter;
