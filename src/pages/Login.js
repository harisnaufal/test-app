import React from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import { Store } from "../store/Store";
import Actions from "../actions/Actions";

const Login = () => {
  const { dispatch } = React.useContext(Store);
  const handleLogin = () => {
    return dispatch({
      type: Actions.LOGIN,
      payload: true
    });
  };
  const responseFacebook = (response) => {
    if (response.accessToken){
      return dispatch({
        type: Actions.LOGIN,
        payload: true
      });
    } else {
      alert('Login Failed');
    }
  }
  const responseGoogle = (response) => {
    if (response.tokenId){
      return dispatch({
        type: Actions.LOGIN,
        payload: true
      });
    } else {
      alert('Login Failed');
    }
  }
  return (
    <div className="login">
      <h3 className="title">LOGIN</h3>
      <div className="search-bar">
        <input className="field"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="search-bar">
        <input className="field"
          type="text"
          placeholder="Password"
        />
      </div>
      <div className="button-signin">
        <div>
          <input type="checkbox" name="remember" value="remember" /> Remember Me
        </div>
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
      <div className="account">
        <FacebookLogin
          appId="472791220015747"
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <GoogleLogin
          clientId="820562297374-9cb29n9osnhti8fjv8bikkl02k8sd67i.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </div>
  );
};

export default Login;
