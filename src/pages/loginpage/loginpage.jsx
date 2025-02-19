
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpage.css";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "../../redux/slice/slice";
import { loginAPI } from "../../../api_services/allAPIs/loginAPI";
function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userCredentials, setUserCredentials] = useState({ loginEmail: "", loginPassword: "" })

  const handleLogin = (result) => {
    if (result.status === 201) {
      alert(result.data.message)
      localStorage.setItem('userCredentials', JSON.stringify({
        name: result.data.userDetails.name,
        email: result.data.userDetails.email,
        password: result.data.userDetails.password,
        token: result.data.token
      }))
    }
    dispatch(updateIsLoggedIn(true))
    navigate("/home")
  }

  const handleLoginAPI = async (event) => {
    event.preventDefault()

    const data = { email: userCredentials.loginEmail, password: userCredentials.loginPassword }
    console.log("data : ", data);

    try {
      const result = await loginAPI(data)
      console.log("result : ", result);
      handleLogin(result)

    } catch (error) {
      return error
    }
  }

  return (
    <div className="auth">
      <div className="form-container ">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserCredentials((prev) => ({ ...prev, loginEmail: e.target.value }))} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setUserCredentials((prev) => ({ ...prev, loginPassword: e.target.value }))} />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button" onClick={handleLoginAPI}>
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
