import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { Image, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import EmojiButtonGroup from '../components/dashboard/EmojiButtonGroup';
import Nav from '../components/Nav';
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
    } else {
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
    <Container>
      <Nav cross="/milestone" />
      <div>
        <div className="reflection-page-header">
          <h2>
            {!editMode ? (
              reflection?.title
            ) : (
              <input
                value={reflection?.title}
                onChange={handleChange}
                className="text-area-edit"
                name="title"
              ></input>
            )}
          </h2>

          <div>
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
        </div>
      </div>
      <div className="reflection-page-emoji">
        <h2>{!editMode && reflection?.emoji}</h2>
      </div>

      <div className="reflection-edit">
        <div>
          <p>How are you feeling today?</p>
          {editMode && <EmojiButtonGroup handleChange={handleChange} />}
        </div>
        <div className="pb-3 d-flex justify-content-center">
          <Image className="w-50" src={preview || image} />
        </div>

        <div className="upload-image">
          {editMode && (
            <Form.File
              className="choose-file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            ></Form.File>
          )}
        </div>
        <p className="your-ref">Your Reflection</p>
        <div className="reflection-text">
          <div>
            {!editMode ? (
              <p>{reflection?.notes}</p>
            ) : (
              <textarea
                className="text-area-ref"
                value={reflection?.notes}
                name="notes"
                onChange={handleChange}
              ></textarea>
            )}
          </div>
        </div>
        {editMode && (
          <div>
            <div className="d-flex justify-content-center m-auto">
              <Button
                variant="flat"
                className="btn-part4 btn-flat"
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                variant="flat"
                className="btn-part4 delete"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Reflection;
