import React, {Fragment} from 'react';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from 'react-bootstrap';

/*const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
*/
export default function Information () {
  /*const classes = useStyles(); */

  return (
    <Fragment>
     <div className="animated-text">
        <h3>Bringing On-Chain <span className="color">Derivatives </span></h3>
        
        <h3 className="mt-2">to the DeFi Ecosystem</h3>
        
        <p className="mt-4">Position Exchange is a Decentralized Trading Protocol operating on Binance Smart Chain (BSC), that enables traders, liquidity providers and developers to participate in an open financial market with no barriers to entry. No authorization is required to use the open source Position Exchange protocol.</p>
        <span className="color">Learn More!</span>
      <Grid className="mt-4" container spacing={3}>
       <Grid item xs={12} md={6}>
         <Button style={{width: "70%",background:"#9830FF",borderColor: "#9830FF"}} size="lg" className="bg-color rounded-pill">
          <span className="bold"> Trade Now! </span>
         </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button style={{width: "70%",background:"#9830FF",borderColor: "#9830FF"}} size="lg" className="rounded-pill">
           <span className="bold">Buy RISK</span>
         </Button>
        </Grid>
      </Grid>
     </div>
    </Fragment>
    )
}