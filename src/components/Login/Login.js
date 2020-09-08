/* This component which uses loginHelper component to display form and buttons for users
to enter their credentials. */

import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import history from "../../history";
import axios from 'axios';

import './Login.css'

class Login extends React.Component {
  render() {
    if (this.props.isLoggedIn == true) {
      localStorage.setItem('isLoggedIn', this.props.isLoggedIn);
      localStorage.setItem('userId', this.props.userData.username);
      localStorage.setItem('first_name', this.props.userData.first_name);
      localStorage.setItem('user_type', this.props.userData.user_type);
      localStorage.setItem('refresh', this.props.userData.refresh);
      localStorage.setItem('access_token', this.props.userData.access);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.userData.access
      history.push("/dashboard");
    }
    if (localStorage.getItem('isLoggedIn') === "true" || this.props.isLoggedIn == true) {
      return (
        <React.Fragment>
          {history.push("/dashboard")}
        </React.Fragment>
      );
    } else {
      return (
        <div className="login">
          <div className="login__form">
            <LoginForm />
          </div>
          <div className="login__instructions">
            <h5 className="login__instructions-header">Please use the following credentials :</h5>
            <p><u>For MGO View : </u><br /><strong>Username:</strong> mgo1 <span className="login__instructions-mgo"><strong> Password:</strong> mgo1 </span> </p>
            <p><u>For fundraiser view : </u><br /><strong>Username:</strong> fr1 <span className="login__instructions-fr"><strong>Password:</strong> fr1 </span> </p>
            <p><u>For donor view : </u><br /><strong>Username:</strong> donor1 <span className="login__instructions-donor"><strong> Password:</strong>donor1 </span></p>
            <p className="login__instructions-note"><i>Note: After logging in, you will see an instruction icon at the topright cornor.
              Please click on that to find the details of the application usuage.</i></p>
          </div>
        </div >
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    userData: state.login.userData,
  }
}

export default connect(mapStateToProps, null)(Login);