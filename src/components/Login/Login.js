import React from 'react';
import { connect } from 'react-redux';
import LoginHelper from './LoginHelper';



class Login extends React.Component {

  render(){
    if (this.props.isLoggedIn === true || localStorage.getItem('isLoggedIn') === "true"){
      debugger;
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userId', this.props.userId);
      this.props.history.push("/admin/dashboard");
    }
    return (
      <div>
        <LoginHelper />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    userId: state.login.userId,
  }
}

export default connect(mapStateToProps,null)(Login);