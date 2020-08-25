import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/login', formData)
      .then((response) => {
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data);
        history.push('/dashboard');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4">Story___</h1>
      <Form style={{ width: 300 }} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/signup">
        Need an Account? Sign up.
      </Link>
    </Container>
  );
};

export default Login;
