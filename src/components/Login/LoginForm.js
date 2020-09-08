/* This component provides forms and button to faciliate the login */

import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Button, CssBaseline, TextField } from '@material-ui/core';
import { Box, Container } from '@material-ui/core';
import { onSignInClick } from '../../actions';
import Copyright from '../Copyright/Copyright';
import Loader from '../Loader/Loader';
import uWindsorLogo from '../../assets/img/uWindsor.jpg'
import './Login.css';


const LoginForm = (props) => {

  const loginHelper = (e, email, password) => {
    e.preventDefault();
    props.onSignInClick(email, password);

  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="main" maxWidth="xs" className="formCont">
      <CssBaseline />
      <div className="formCont__inner">
        <img src={uWindsorLogo} />

        <form className="loginForm" noValidate onSubmit={(e) => loginHelper(e, email, password)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            onInput={e => setEmail(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
            className="loginForm__textfield"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
            autoComplete="current-password"
            className="loginForm__textfield"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit loginForm__btn"
          >
            Sign In
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { login: state.login }
}

export default connect(mapStateToProps, { onSignInClick: onSignInClick })(LoginForm);