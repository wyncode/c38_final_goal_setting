import React, { useContext, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import Nav from '../components/Nav';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Profile = ({ history }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleImage = (event) => {
    event.preventDefault();
    if (image) {
      const avatar = new FormData();
      avatar.append('avatar', image, image.name);
      axios
        .post('/api/users/avatar', avatar, { withCredentials: true })
        .then((response) => {
          setCurrentUser({ ...currentUser, avatar: response.data.secure_url });
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this account!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        axios({
          method: 'DELETE',
          url: '/api/users/me',
          withCredentials: true
        })
          .then(() => {
            sessionStorage.removeItem('user');
            setCurrentUser(null);
            history.push('/login');
          })
          .catch((error) => {
            console.log(error);
          });
        swal('Your account has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your account has not been deleted!');
      }
    });
  };

  return (
    <>
      <Nav cross="/dashboard" />
      <Container className="d-flex flex-column align-items-center justify-content-center mt-5 pb-4">
        <h2 className="pb-3">Your Profile</h2>
        <div>
          <div className="mt-3 p-2">
            <p>Name: {currentUser?.name}</p>
            <p>Email: {currentUser?.email}</p>
          </div>
          <div className="avatar-prev">
            <Image
              src={
                preview
                  ? preview
                  : currentUser?.avatar
                  ? currentUser.avatar
                  : require('../resources/images/default_avatar.png')
              }
              className="h-100 wa"
              alt="profilePic"
            />
          </div>
        </div>
        <div className="mt-4">
          <form className="d-flex flex-column" onSubmit={handleImage}>
            <input type="file" accept="image/*" onChange={handleChange} />
            <Button variant="flat" className="my-2" type="submit">
              Save Image
            </Button>
          </form>
        </div>

        <div>
          <Button variant="flat" className="delete" onClick={handleDelete}>
            Delete Account
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
