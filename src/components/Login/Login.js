import React from 'react';
import { connect } from 'react-redux';
import LoginHelper from './LoginHelper';
import history from "../../history";
import axios from 'axios';

class Login extends React.Component {
  render(){
    if (this.props.isLoggedIn == true){
      localStorage.setItem('isLoggedIn', this.props.isLoggedIn);
      localStorage.setItem('userId', this.props.userData.username);
      localStorage.setItem('first_name', this.props.userData.first_name);
      localStorage.setItem('user_type', this.props.userData.user_type);
      localStorage.setItem('refresh', this.props.userData.refresh);
      localStorage.setItem('access_token', this.props.userData.access);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.userData.access
      history.push("/dashboard");
    }
    if ( localStorage.getItem('isLoggedIn') === "true" || this.props.isLoggedIn == true){
      return (
        <React.Fragment>
        {history.push("/dashboard")}
        </React.Fragment>
      );
    }else{
      return (
        <div>
          <LoginHelper />
        </div>
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

export default connect(mapStateToProps,null)(Login);