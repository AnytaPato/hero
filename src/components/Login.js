import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

class Login extends Component {

render() {
const responseFacebook = (response) => {
console.log(response);
}

const responseGoogle = (response) => {
console.log(response);
}

return (
    
<div className="container row text-center">
<h1 className="text-center" >LOGIN</h1>
<hr></hr>
<FacebookLogin
appId="1088597931155576" 
fields="name,email,picture"
callback={responseFacebook}
/>
<hr />
<hr />

<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="LOGIN WITH GOOGLE"
onSuccess={responseGoogle}
onFailure={responseGoogle}
/>

<hr></hr>
<Link to="/Hero">ENTRAR</Link>
</div>
);
}
}

export default Login;

