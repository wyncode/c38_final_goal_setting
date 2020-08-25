import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Chapter = () => {
  const { currentChapter } = useContext(AppContext);
  console.log(currentChapter);
  return (
    <div>
      <h2>Chapters</h2>
      {currentChapter.description}
    </div>
  );
};

export default Chapter;
