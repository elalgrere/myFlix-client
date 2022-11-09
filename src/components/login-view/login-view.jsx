import React, { useState } from 'react';
import {
  Form, 
  Button, 
  Row, 
  Col,
  Card,
  CardGroup,
 } from 'react-bootstrap/Col';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication, then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };
  const handleClickRegister = (e) => {
    e.preventDefault();
    props.toRegistrationView ('');
  };

  return (
    <Container>
      <Row>
       <Col>
        <CardGroup>
         <Card> 
         <Card.Body> 
         <Card.Title>Please Register</Card.Title> 
        <Form>
         <Form.Group>
         <Form.Label>Username:</Form.Label>
         <Form.Control
         type="text" 
         value={username}
         onChange={e => setUsername(e.target.value)}
         required
         placeholder="Enter username"
         />
      </Form.Group>  

      <Form.Group> 
       <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required
        minLenght="8"
        placeholder="Your password must be 8 or more characters"
        />
        </Form.Group> 

       <Form.Group>  
      <Form.Label>Email:</Form.Label>
        <Form.Control
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        required
        placeholder="Enter your email address"
        />
        </Form.Group>
        <Form.Group>
      <Form.Label>Birthday:</Form.Label>
        <Form.Control
        type="birthday" 
        value={birthday} 
        onChange={e => setBirthday(e.target.value)} 
        />
      </Form.Group>
      <Button 
      variant= "primary"
      type="submit" 
      onClick={handleSubmit}>
       Submit
          </Button>  
         </Form> 
         </Card.Body>  
         </Card>
        </CardGroup>
       </Col>
      </Row> 
    </Container>
  ); 
}
  
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
  };


  