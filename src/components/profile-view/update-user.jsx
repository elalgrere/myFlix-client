import React from 'react';

function UpdateUser({handleSubmit, handleUpdate }) {
    return (
      
    <><h4>Update</h4><Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            defaultValue={user.Username}
            onChange={e => handleUpdate(e)}
            required
            placeholder='Enter a username' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            defaultValue=''
            onChange={e => handleUpdate(e)}
            required
            minlenght='8'
            placeholder='Your password must be 8 or more characters' />
        </Form.Group>

        <Form.Group>
          <FormLabel>Email</FormLabel>
          <Form.Control
            type='email'
            defaultValue={user.Email}
            onChange={e => handleUpdate(e)}
            required
            placeholder='Enter your email address' />
        </Form.Group>
        <Form.Group>
          <Button variant='primary' type='submit'
            OnClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form></>
    )
  } 

  export default UpdateUser