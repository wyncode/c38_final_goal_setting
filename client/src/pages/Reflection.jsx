import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { Image, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import EmojiButtonGroup from '../components/dashboard/EmojiButtonGroup';

const Reflection = ({ history }) => {
  const { currentReflection, currentGoal, setCurrentGoal } = useContext(
    AppContext
  );
  const [editMode, setEditMode] = useState(false);
  const [reflection, setReflection] = useState(currentReflection);
  const [image, setImage] = useState(currentReflection?.image);
  const [preview, setPreview] = useState(null);

  if (!currentReflection) history.push('/dashboard');

  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setPreview(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      setReflection({ ...reflection, image: '' });
    } else if (
      event.target.name === 'emoji' &&
      reflection['emoji'] &&
      reflection['emoji'] === event.target.value
    ) {
      setReflection({ ...reflection, emoji: '' });
      console.log('gotcha');
    } else {
      console.log('else value', { [event.target.name]: event.target.value });
      setReflection({ ...reflection, [event.target.name]: event.target.value });
    }
  };

  const handleDelete = () => {
    axios
      .delete(`/api/goal/${currentGoal._id}/reflection/${reflection._id}`, {
        withCredentials: true
      })
      .then((response) => {
        setCurrentGoal(response.data);
      })
      .catch((error) => console.log(error));
    history.push('/milestone');
  };

  const handleSave = (event) => {
    console.log('save running ');
    const reflectionPost = new FormData();
    preview && reflectionPost.append('image', image, image.name);
    Object.keys(reflection).forEach((key) => {
      if (reflection[key] !== currentReflection[key])
        reflectionPost.append(key, reflection[key]);
    });
    axios
      .patch(
        `/api/goal/${currentGoal._id}/reflection/${currentReflection._id}`,
        reflectionPost,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        setCurrentGoal(response.data);
      })
      .catch((error) => console.log(error));
    history.push('/milestone');
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <div className="d-flex">
        <h2>
          {!editMode ? (
            reflection?.title
          ) : (
            <input
              value={reflection?.title}
              onChange={handleChange}
              name="title"
            ></input>
          )}
        </h2>
        <h2>{!editMode && reflection?.emoji}</h2>
        <button
          className="editButton"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          Edit
        </button>
      </div>
      {editMode && <EmojiButtonGroup handleChange={handleChange} />}
      <Image className="w-75" src={preview || image} />
      {editMode && (
        <Form.File
          name="image"
          accept="image/*"
          onChange={handleChange}
        ></Form.File>
      )}
      {!editMode ? (
        <p>{reflection?.notes}</p>
      ) : (
        <input
          value={reflection?.notes}
          name="notes"
          onChange={handleChange}
        ></input>
      )}
      {editMode && (
        <div>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      )}
    </Container>
  );
};

export default Reflection;
