/* This component is used by footer of the login page to display the copyright. */
import React from 'react';
import {Link,Typography} from '@material-ui/core';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://learn.uwindsor.ca">
          uWindsor
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright;