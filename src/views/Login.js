import React from 'react';
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import firebase from '../firebaseConfig/fbConfig'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import crossfitBG from '../assets/background.png'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#000',
      },
      '&:hover fieldset': {
        borderColor: '#000',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#000',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${crossfitBG})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: '#FFF',
    },
  },
  container: {
    height: '572px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(210, 105, 30, 0.7)',
  },
  form: {
    padding: 20,
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  margin: {
    color: '#FFF',
  },
  submit: {
    backgroundColor: '#000',
    color: '#FFF',
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();

  // historyHook do React-router-dom
  let history = useHistory();

  // StateHook do React
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  })

  //Lida com o evento onChange dos inputs
  const handleChange = name => event => {
    setLogin({ ...login, [name]: event.target.value });
  };

  //Login with firebase
  const loginWith = () => {
    const { password, email } = login
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async function (result) {
        alert('Bem vindo, ' + email);
        localStorage.setItem('uid', firebase.auth().currentUser.uid)
        // Redirect na Route
        history.push("/events")
      })
      .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao autenticar, verifique o erro no console.')
      });

  }

  if (localStorage.getItem('uid')) return <Redirect to="/events" />

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{ marginTop: 20, color:'#000' }}>
          <strong>Log</strong>in
        </Typography>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange('email')}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
          />
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={loginWith}
          >
            LogIn
          </Button>
          <Grid container style={{display: 'flex', flexDirection: 'column'}}>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color: "#FFF"}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item style={{flex: 1, alignSelf: 'center', marginTop: 40}}>
              <Link href="/register" variant="body1" style={{color: "#FFF"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}