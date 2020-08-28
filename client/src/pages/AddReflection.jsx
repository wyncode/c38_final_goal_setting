import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  ToggleButton
} from 'react-bootstrap';
//import axios from 'axios';

const AddReflection = () => {
  const [emojiValue, setEmojiValue] = useState();
  //const [reflectionData, setReflectionData] = useState();
  const [image, setImage] = useState();
  const [textbox, setTextbox] = useState();
  useEffect(() => {}, []);
  const emojis = [
    { emoji: '🙂', id: 'smile' },
    { emoji: '😍', id: 'heart eyes' },
    { emoji: '😅', id: 'grining sweat' },
    { emoji: '😐', id: 'nuetral face' },
    { emoji: '😶', id: 'no mouth' },
    { emoji: '🙁', id: 'frown' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(image, textbox, emojiValue);
  };

  // {
  //   title: {
  //     type: String
  //   },
  //   notes: {
  //     type: String
  //   },
  //   emoji: {
  //     type: String
  //   }
  // }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label>{}: Reflection</Form.Label>
        <Form.Group>
          <Form.File accept="image/*"></Form.File>
        </Form.Group>
        <Form.Group>
          <Form.Label onChange={(e) => setImage(e.target.value)}>
            How do you feel today?
          </Form.Label>
          <br />
          <ButtonGroup toggle>
            {emojis.map((emoji) => (
              <ToggleButton
                key={emoji.id}
                type="radio"
                name="radio"
                value={emoji.emoji}
                checked={emojiValue === emoji.emoji}
                onChange={(e) => setEmojiValue(e.currentTarget.value)}
              >
                {emoji.emoji}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Write down any thoughts</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            onChange={(e) => {
              setTextbox(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default AddReflection;
