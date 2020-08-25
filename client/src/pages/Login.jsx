import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from '../components/Nav';

const Login = () => {
  return (
    <Container className="login">
      <Nav />
      <div>
        <h1>Login</h1>
      </div>
      <Form>
        <div>
          <Form.Label className="text">Email address</Form.Label>
          <Form.Control
            className="label"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <Form.Label className="text">Password</Form.Label>
          <Form.Control
            className="label"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <Form.Check type="checkbox" label="Remember Me" />
        </div>
        <div>
          <Button className="login-btn" variant="secondary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
