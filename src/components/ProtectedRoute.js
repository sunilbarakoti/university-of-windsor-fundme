/* This component restricts unauthorized users to navigate through the pages*/

import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({isLoggedIn, component: Component, ...rest }) => {
  return(
      <Route {...rest} render={(props) => (
        isLoggedIn === true || localStorage.getItem('isLoggedIn') === "true"
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }} />
      )} />
  )
}

  const mapStateToProps = state =>{
      return {isLoggedIn: state.login.isLoggedIn}
  }
  export default connect(mapStateToProps,null)(ProtectedRoute);