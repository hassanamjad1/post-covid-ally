import React from 'react'
import {auth} from '../firebase.js'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    linkStyle: {
      color: '#f3f3f3',
      textDecoration: 'none',
      fontSize: '30px',
      fontWeight: "200",
      marginRight: theme.spacing(2)
    }, p: {
      fontSize: '18px',
      marginLeft: theme.spacing(1)
    }
  }));
function SignOut() {
    const classes = useStyles();
    const history = useHistory();
    async function handleLogout() {
        await auth.signOut();
        history.push("/signin");
      }
    return (
        <div>
            <Link to='/' onClick={handleLogout} className={classes.linkStyle}><i class="fas fa-sign-out-alt"></i><span className={classes.p}>Signout</span></Link>
        </div>
    )
}

export default SignOut