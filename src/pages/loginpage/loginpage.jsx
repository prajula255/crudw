import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginpage.css';
function LoginPage() {
  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
    
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className='signupdetails'>
          <a href='/forgot-pass'>Forgot password</a>
          <span>|</span>
          <a href='/signup'>SignUp</a>
        </div>
      </Form>
        
      </div>
  );
}

export default LoginPage;