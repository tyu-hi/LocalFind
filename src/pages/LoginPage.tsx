import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Add your authentication logic here
    console.log('Logging in with:', data.username, data.password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <Form
        style={{
          width: '300px',
          margin: 'auto',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            {...register('username', { required: 'Username is required' })}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
