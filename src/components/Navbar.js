import React from 'react';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BtnPages from './BtnPages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Roboto"
  },
  navbar:{
    backgroundColor: 'black',
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  let history = useHistory();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogout = Boolean(anchorEl);

  const singOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert('Você se deslogou');
        localStorage.setItem('uid', '')
        handleClose();
        history.push(`/login`);
      }, function (error) {
        console.error(error);
      });
  };

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <BtnPages />
          <Typography variant="h6" className={classes.title}>
            No <strong>Days</strong> Off
          </Typography>
          {localStorage.getItem('uid') && (
            <div>
              <IconButton
                aria-label="user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openLogout}
                onClose={handleClose}
              >
                <MenuItem onClick={singOut}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}