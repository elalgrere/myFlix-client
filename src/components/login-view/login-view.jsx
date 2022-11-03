import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Card, Col, Row } from 'react-bootstrap/Form';


import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // validate user inputs
const validate = () => {
  let isReq = true;
  if(!username){
   setUsernameErr('Username Required');
   isReq = false;
  }else if(username.length < 2){
   setUsernameErr('Username must be 2 characters long');
   isReq = false;
  }
  if(!password){
   setPasswordErr('Password Required');
   isReq = false;
  }else if(password.length < 6){
   setPassword('Password must be 6 characters long');
   isReq = false;
  }

  return isReq;
}
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://dashboard.heroku.com/apps/myflixmoviesapp/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
  };


  // src/components/login-view/login-view.jsx



