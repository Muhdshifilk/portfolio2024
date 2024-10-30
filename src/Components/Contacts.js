import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container id="contact" className="my-5">
    <h2>Contact</h2>
    <Form>
      <Form.Group className='d-flex' controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control className='ms-5' type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className='d-flex mt-3' controlId="formEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control className='ms-5' type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className='d-flex mt-3' controlId="formMessage">
        <Form.Label>Message </Form.Label>
        <Form.Control className='ms-3' as="textarea" rows={3} placeholder="Your message" />
      </Form.Group>
      <Button className='mt-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
);

export default Contact;
