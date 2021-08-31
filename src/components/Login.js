import React from 'react';
import FacebookReduxLogin from "facebook-login-redux-react";
import {Link} from "react-router-dom";
import {FloatingLabel, Button, Form} from "react-bootstrap";


const Login = () => {
    return (
 <div className="container row mb-3">
     <hr />
     <h1>Login</h1>
     <hr />
      <>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>

    <hr />
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <hr />
  <h1> Iniciar sesion en Facebook </h1>
  <hr />
  <FacebookReduxLogin />
</>    
</div>
    )
}

export default Login;
