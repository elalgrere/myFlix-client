import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    <div className='login-view'>
    <Row>
      <Col>
        <h2 className='display-4'>Login</h2>
      </Col>
    </Row>
     <Form className='login-form'>
      <Form.Group controlId='formUsername'>
        <Row className='login-view__line'>
          <Col sm={0} md={3}></Col>
           <Col sm={12} md={2}>
            <Form.Label>Username:</Form.Label>
           </Col>
          <Col sm={12} md={4}>
      <Form.Control
              type='text'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formUsername">
       <Form.Label>Username:</Form.Label>
         <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
         <Form.Label>Password:</Form.Label>
       <Form.Control type="password" 
        onChange={e => setPassword(e.target.value)} />
      </Form.Group>
     
       <Button variant="primary" 
       type="submit" 
       onClick={handleSubmit}>
        Log in
       </Button>
       <Button variant="secondary"
       type='submit'
       onClick={handleClickRegister}>
        Register
       </Button>
       </Form>
       </div>
   );
  }
  
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
  };


  