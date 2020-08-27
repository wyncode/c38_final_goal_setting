import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Logout = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);

  const handleSignOut = () => {
    axios
      .post('/api/users/logout', { withCredentials: true })
      .then(() => {
        setCurrentUser(null);
        sessionStorage.removeItem('user');
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };

  return <Dropdown.Item onClick={handleSignOut}>Logout</Dropdown.Item>;
};

export default Logout;
