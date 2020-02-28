import React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox} from '@material-ui/core';
import {Link,Grid,Box,Typography,Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import swal from 'sweetalert';
import { onSignInClick } from '../../actions';
import Copyright from '../Copyright/Copyright';
import LoginAPI from '../../api/LoginAPI';
import Loader from '../Loader/Loader';
import uWindorLogo from '../../assets/img/uWindsor.jpg'
import './Login.css';


const  LoginHelper = (props) => {

  const loginHelper = (e,email,password) =>{
    e.preventDefault();
    props.onSignInClick(email,password);

  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
          <img src = {uWindorLogo}/>
          {/* <LockOutlinedIcon /> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className= "form" noValidate onSubmit = {(e)=>loginHelper(e,email,password)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value = {email}
            onInput = {e=>setEmail(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
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
            value = {password}
            onInput = {e=>setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {login: state.login}
}

export default connect(mapStateToProps,{onSignInClick:onSignInClick})(LoginHelper);