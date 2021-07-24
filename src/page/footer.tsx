import React,{Fragment} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../media/logo.png';
import {Container} from 'react-bootstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Wave from '../media/footer.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    email: {
      padding: theme.spacing(3),
      textAlign: 'center',
       background: "#282C34",
       color: "#fff"
    },
   left: {
     textAlign: "left",
   },
  }),
);

export default function Footer () {
  const classes = useStyles();
  return (
    <Fragment>
    <div className="footer">
   <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
       <img className="img-fluid" src={logo} alt="logo" />
        <p>The Decentralized Exchange platform of choice.</p>
      </Grid>
      <Grid item xs={12} md={6}>
          <Paper className={classes.email}>
           <strong>Stay up to date</strong>
           <p>Submit your email to get the latest news</p>
           <input 
             type="email"
             placeholder="enter your email"
             /> <button style={{borderRadius: "10px",margin: "5px",background: "#282C34",color: "#fff"}}> Submit</button>
          </Paper>
        </Grid>
     </Grid>
     <Grid className="mt-5" container spacing={3}>
      <Grid item xs={12} md={3}>
       <strong className={classes.left}>Governance</strong>
        <ul className="footer-nav">
          <li>Announcements</li>
          <li>Voting</li>
          <li>Forum</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={3}>
      <strong className={classes.left}>About Us</strong>
        <ul className="footer-nav">
          <li>Documentation</li>
          <li>Risk Exchange</li>
          <li>Risk token</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={3}>
      <strong className={classes.left}>Products</strong>
        <ul className="footer-nav">
          <li>Trading</li>
          <li>Staking</li>
          <li>Farming</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={3}>
      <strong className={classes.left}>Support</strong>
        <ul className="footer-nav">
          <li>Contact Us</li>
          <li>Help Center</li>
        </ul>
      </Grid>
     </Grid>
     <Grid className="mt-5" container spacing={1}>
       <Grid item xs={3}>
         <TelegramIcon />
       </Grid>
       <Grid item xs={3}>
         <RedditIcon />
       </Grid>
       <Grid item xs={3}>
         <TwitterIcon />
       </Grid>
       <Grid item xs={3}>
         <GitHubIcon />
       </Grid>
     </Grid>
    </Container>
    </div>
   <img src={Wave} alt="footer wave" />
    </Fragment>
    )
}
