import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"; 
import './registerpage.css'; 
function RegisterPage() {
  return (
    <div className="form-container1">
      <h2>Register</h2> 
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPlace">
          {/* <Form.Label>Place</Form.Label> */}
          <Form.Control type="text" placeholder="Place" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Confirm email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="tel" placeholder="Contact" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;