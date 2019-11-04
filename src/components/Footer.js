import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  footer: {
    flexGrow: 1,
    backgroundColor: '#000',
    color: '#FFF',
    padding: theme.spacing(6),
    marginTop: 30
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (

    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
    </Typography>
      <Typography variant="subtitle1" align="center" color="inherit" component="p">
        Something here to give the footer a purpose!
    </Typography>
      <Copyright />
    </footer>

  );
}
