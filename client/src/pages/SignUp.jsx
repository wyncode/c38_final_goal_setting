import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from '../components/Nav';
const SignUp = () => {
  return (
    <Container className="signUp">
      <Nav />
      <div>
        <h6>
          The final step, lets set up your profile so we can save your progress.
        </h6>
        <p>Don't worry, your information is safe with us</p>
      </div>
      <Form>
        <div>
          <Form.Label className="text">Name:</Form.Label>
          <Form.Control
            className="label"
            type="name"
            placeholder="Ex. John Smith"
          />
        </div>
        <div>
          <Form.Label className="text">Gender:</Form.Label>
          <Form.Control
            className="label"
            type="gender"
            placeholder="male/Female/non-binary"
          />
        </div>
        <div>
          <Form.Label className="text">Email address</Form.Label>
          <Form.Control
            className="label"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          <Button className="signUp-btn" variant="secondary" type="submit">
            Submit Profile
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
