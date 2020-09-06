import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
const EmojiButtonGroup = ({ handleChange }) => {
  const emojis = [
    { emoji: '🙂', id: 'smile' },
    { emoji: '😍', id: 'heart eyes' },
    { emoji: '😅', id: 'grining sweat' },
    { emoji: '😐', id: 'nuetral face' },
    { emoji: '😶', id: 'no mouth' },
    { emoji: '🙁', id: 'frown' }
  ];

  return (
    <ToggleButtonGroup className="radio-emoji" type="checkbox" name="emoji">
      {emojis.map((emoji) => (
        <ToggleButton
          className="edit-emoji"
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
