import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import moment from 'moment';
import EmojiButtonGroup from '../components/dashboard/EmojiButtonGroup';

const AddReflection = ({ history }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dayNum, setDayNum] = useState(null);
  const [reflection, setReflection] = useState(null);
  const { currentUser, currentGoal } = useContext(AppContext);
  if (!currentGoal || !currentUser) history.push('/dashboard');

  useEffect(() => {
    currentGoal && setDayNum(getDayNumber(currentGoal.createdAt));
    setReflection({ title: `Day ${dayNum}: Reflection` });
  }, [dayNum, currentGoal]);

  const getDayNumber = (createdDate) => {
    const start = moment(createdDate);
    const today = moment();
    return today.diff(start, 'days') + 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reflectionPost = new FormData();
    image && reflectionPost.append('image', image, image.name);
    Object.keys(reflection).forEach((key) =>
      reflectionPost.append(key, reflection[key])
    );
    axios
      .post(`/api/goal/${currentGoal._id}/reflection`, reflectionPost, {
        withCredentials: true
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    history.push('/milestone');
  };

  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setPreview(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      setReflection({ ...reflection, [event.target.name]: event.target.value });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Day {dayNum}: Reflection</Form.Label>
        <Form.Group>
          <Form.File
            name="image"
            accept="image/*"
            onChange={handleChange}
          ></Form.File>
        </Form.Group>
        {preview && <Image src={preview} alt="reflection" width={250} />}
        <Form.Group>
          <Form.Label>How do you feel today?</Form.Label>
          <EmojiButtonGroup handleChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Write down any thoughts</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="notes"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default AddReflection;
