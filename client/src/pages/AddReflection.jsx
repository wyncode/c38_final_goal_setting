import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import moment from 'moment';
import EmojiButtonGroup from '../components/dashboard/EmojiButtonGroup';
import Nav1 from '../components/Nav1';
const AddReflection = ({ history }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dayNum, setDayNum] = useState(null);
  const [reflection, setReflection] = useState(null);
  const { currentUser, currentGoal, setCurrentGoal } = useContext(AppContext);
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
        setCurrentGoal(response.data);
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
      <Nav1 />
      <Form onSubmit={handleSubmit}>
        <div className="add-new-ref">
          <div className="reflection-page-header">
            <h2>Day {dayNum}: Reflection</h2>
          </div>
          <div>
            <Form.Group>
              <p>How do you feel today?</p>
              <EmojiButtonGroup handleChange={handleChange} />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center p-2">
            {preview && (
              <Image src={preview} alt="reflection" className="w-50 " />
            )}
          </div>
          <div className="upload-image">
            <Form.Group>
              <Form.File
                className="choose-file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              ></Form.File>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <p>Write down any thoughts</p>
              <div className="reflection-text">
                <textarea
                  className="text-area-ref"
                  as="textarea"
                  rows="5"
                  name="notes"
                  onChange={handleChange}
                ></textarea>
              </div>
            </Form.Group>
          </div>
          <div className="reflection-btn">
            <button
              variant="flat"
              className="info-btn"
              type="submit"
              type="submit"
            >
              <p>Save</p>
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
export default AddReflection;
