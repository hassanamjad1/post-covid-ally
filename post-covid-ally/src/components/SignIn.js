import React, { useState } from 'react'
import './form.css';
import firebase from 'firebase'
import {auth} from '../firebase'
import { Button, TextField} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    size : {
        fontSize: '25px'
    }, p : {
        margin: 0,
        padding: 0
    }, btn : {
        fontSize: '20px',
        margin: theme.spacing(1.5)
    }, icon: {
        fontSize: '100px'
    }
}));

function Signin() {
    const history = useHistory();
    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider);
        history.push('/');
    }
    const classes = useStyles();
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const changeEmail = (event) => {
        setEmail(event.target.value);
    };
    const changePassword = (event) => {
        setPassword(event.target.value);
    };

  return (
      <div className="form-container">  
        <form className="form">
            <span className={classes.icon}><i class="fas fa-users"></i></span>
            <h1 className="label">Sign in</h1>
            <TextField InputProps={{ classes: { input: classes.size }}} 
                fullWidth label="Email" onChange={changeEmail} value={username}
            />
            <TextField InputProps={{ classes: { input: classes.size }}}
                fullWidth type='password' label="Password" 
                onChange={changePassword} value={password}
            />
            <Button className={classes.btn} type="button">Login</Button>
            <p className="p">OR</p>
            <Button className={classes.btn} onClick={signInWithGoogle}>Google Signin</Button>
        </form>
      </div>
  );
}

export default Signin;

/*
<div className="form">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            <div className="footer">
            <Button type="button" className="btn">
                Login
            </Button>
            <Button className="btn" onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </div> */