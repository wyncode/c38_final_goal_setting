import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
const EmojiButtonGroup = ({ handleChange, emojiVal }) => {
  const emojis = [
    { emoji: '🙂', id: 'smile' },
    { emoji: '😍', id: 'heart eyes' },
    { emoji: '😅', id: 'grining sweat' },
    { emoji: '😐', id: 'nuetral face' },
    { emoji: '😶', id: 'no mouth' },
    { emoji: '🙁', id: 'frown' }
  ];
  const [value, setValue] = useState('');

  return (
    <ToggleButtonGroup type="checkbox" name="emoji">
      {emojis.map((emoji) => (
        <ToggleButton
          className={'px-4'}
          style={{ fontSize: '2rem' }}
          key={emoji.id}
          name="emoji"
          alt={emoji.id}
          value={emoji.emoji}
          onChange={handleChange}
        >
          {emoji.emoji}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default EmojiButtonGroup;
