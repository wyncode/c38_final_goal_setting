import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
  Image
} from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const AddReflection = () => {
  const [emojiValue, setEmojiValue] = useState();
  //const [reflectionData, setReflectionData] = useState();
  const [image, setImage] = useState();
  const [textbox, setTextbox] = useState();
  const [preview, setPreview] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AppContext);
  let imagefile;
  const handleChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
    console.log(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const img = new FormData();
    imagefile = img.append('img', image, image.name);
    // axios
    //   .post('/api/users/avatar', avatar, { withCredentials: true })
    //   .then((response) => {
    //     setCurrentUser({ ...currentUser, avatar: response.data.secure_url });
    //   })
    //   .catch((error) => console.log(error));
  };

  useEffect(() => {}, []);
  const emojis = [
    { emoji: '🙂', id: 'smile' },
    { emoji: '😍', id: 'heart eyes' },
    { emoji: '😅', id: 'grining sweat' },
    { emoji: '😐', id: 'nuetral face' },
    { emoji: '😶', id: 'no mouth' },
    { emoji: '🙁', id: 'frown' }
  ];

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
          <Image src={imagefile}></Image>
        </Form.Group>
        <Form.Group>
          <Form.Label onChange={handleChange}>
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
