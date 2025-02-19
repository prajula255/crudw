import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './registerpage.css';
import { registerAPI } from "../../../api_services/allAPIs/registerAPI";
function RegisterPage() {
  const [userCredentials, setUserCredentials] = useState({ RegName: "", RegEmail: "", RegPassword: "" })

  const handleRegName = (e) => {
    const name = e.target.value
    setUserCredentials((prev) => ({
      ...prev,
      RegName: name
    }))
  }

  const handleRegEmail = (e) => {
    const email = e.target.value
    setUserCredentials((prev) => ({
      ...prev,
      RegEmail: email
    }))
  }

  const handleRegPassword = (e) => {
    const password = e.target.value
    setUserCredentials((prev) => ({
      ...prev,
      RegPassword: password
    }))
  }

  const handleRegisterAPI = async (event) => {
    event.preventDefault()
    const data = { "name": userCredentials.RegName, "email": userCredentials.RegEmail, "password":userCredentials.RegPassword }
    console.log("data : ",data);

    try {
      const result = await registerAPI(data)
      console.log("result : ",result);
      
    } catch (error) {
      return error
    }
  }
  return (
    <div className="auth">
      <div className="form-container1 ">
        <h2>Register</h2>
        <Form onSubmit={handleRegisterAPI}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e) => { handleRegName(e) }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => { handleRegEmail(e) }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control type="email" placeholder="Confirm email" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => { handleRegPassword(e) }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;