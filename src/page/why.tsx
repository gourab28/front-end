import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Container} from 'react-bootstrap';
import Profile from '../media/user.svg';
import Secure from '../media/secure.svg';
import Light from '../media/light.svg';
import LowFees from '../media/lowfees.svg';
import Trans from '../media/trans.svg';
import Support from '../media/support.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      borderRadius: "38px",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
   heading: {
     color: "black"
   },
  }),
);
export default function Why() {
  const classes = useStyles();
  return (
    <div className="why">
      <Container>
        <h5>Why DeFiSpeculate (RISK)?</h5>
        <Grid className="mt-5" container spacing={3}>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <img src={Profile} alt="User-Friendly" />
          <h3 className={classes.heading}>User-Friendly</h3>
          <p> The platform is user-friendly offering guidance and tutorial for first time users.</p>
         </Paper>
        </Grid>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <img src={Secure} alt="Secure" />
          <h3 className={classes.heading}>Secure</h3>
          <p> Security above everything. The platform is safe and private.</p>
          </Paper>
        </Grid>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <img src={Light} alt="Lightning" />
          <h3 className={classes.heading}>Lightning quick</h3>
          <p> High performance and high speed transactions.</p>
          </Paper>
        </Grid>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <img src={LowFees} alt="Low Fees" />
          <h3 className={classes.heading}>Low fees</h3>
          <p> Experience very low fees on transactions.</p>
          </Paper>
        </Grid>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
           <img src={Trans} alt="Transparency" />
          <h3 className={classes.heading}>Transparency</h3>
          <p> Community owned. Everyone can freely inspect and participate in DeFiSpeculate (RISK) governance.</p>
          </Paper>
        </Grid>
           <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <img src={Support} alt="Support" />
          <h3 className={classes.heading}>Support</h3>
          <p> Our team is always available to provide support when needed. Get in touch with us should you have any concern.</p></Paper>
        </Grid>
        </Grid>
      </Container>
    </div>
    )
}

