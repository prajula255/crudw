
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpage.css";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "../../redux/slice/slice";

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })

  const handleLogin = () => {
    localStorage.setItem('userCredentials', JSON.stringify(userCredentials))
    dispatch(updateIsLoggedIn(true))
    navigate("/home")
  }

  return (
    <div className="auth">
      <div className="form-container ">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserCredentials((prev) => ({ ...prev, email: e.target.value }))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setUserCredentials((prev) => ({ ...prev, password: e.target.value }))} />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button" onClick={handleLogin}>
            Submit
          </Button>

          <div className="signupdetails">
            <a href="/forgot-pass">Forgot password</a>
            <span>|</span>
            <Link to="/signup">SignUp</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
