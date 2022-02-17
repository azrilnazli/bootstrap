import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


// view
export default function Expenses() {

  const [message, setMessage] = React.useState('cuba data');
    
  function handleChange(event){
    setMessage(event.target.value)
  }

  // View
  return (
    
        <Form>
          <p>{ message }</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter text" onChange={handleChange} />
          </Form.Group>
        </Form>
    );
} // Expenses