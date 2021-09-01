import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Header from "./Header";
import Footer from "./Footer";
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
    <div>
<div>
    <Header />
</div>
<div className="App-header">
<h1 className="text-center" >LOGIN</h1>
<div>
<FacebookLogin
className="facebookLogin"
appId="1088597931155576" 
fields="name,email,picture"
callback={responseFacebook}
/>
</div>
<div>
    <h1>O bien con</h1>
</div>
<div>
<GoogleLogin
className="googleLogin"
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="LOGIN WITH GOOGLE"
onSuccess={responseGoogle}
onFailure={responseGoogle}
/>
</div>
<div>
<Link to="/Hero"><h1>Entrar</h1></Link> 
</div>
</div>
<div>
    <Footer />
</div>
</div>
);
}
}

export default Login;

