import React,{Fragment} from 'react';
import {Container} from 'react-bootstrap';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Trade from '../media/trade.png';
import Block from '../media/blok.png';
import World from '../media/world.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: "#E5E5E5",
      marginTop: "5px"
    },
  }),
);
export default function Services() {
  const classes = useStyles();
  return (
    <Fragment>
     <Container>
      <div className="main-feature">
        <h2>
        OUR MAIN FEATURES 
      </h2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
        <div className="service-content">
          <div className="row">
           <img className="rounded img-fluid" src={Trade} alt="Trade" />
           <h1 className="color"> Invest </h1>
           </div>
         <strong>Let your Crypto work hard for you!</strong>
         <p className={classes.paper}>
         <span className="color">RISK</span> holders can stake the tokens into the <span className="color">Staking</span> Pools to receive rewards and transaction fees. Staking indirectly serves to support the system.</p>
        </div>
        </Grid>
        <Grid item xs={12} md={4}>
        <div className="service-content">
          <div className="row">
             <img className="rounded img-fluid" src={Block} alt="Block" />
             <h1 className="color"> Build </h1>
           </div>
           <strong>Easy & Fast on-chain API creation!</strong>
           <p className={classes.paper}>
          Risk Exchange protocol is a staple of the DeFi infrastructure, an original financial permissionless development platform, offering a flexible and versatile <span className="color">vAMM</span>, providing developers with great flexibility and customizability.</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
        <div className="service-content">
          <div className="row">
            <img className="rounded img-fluid" src={World} alt="World" />
          <h1 className="color">Trade </h1>
           </div>
           <strong>Take your trading to the next level!</strong>
           <p className={classes.paper}>
          Trade on-chain derivatives with <span className="color">High Leverage, Low Fees, Low Slippage and Gas Costs.</span>RISK Exchange enables efficient trading at the best available price. Easily exchange ERC-20 tokens permissionless.</p>
          </div>
        </Grid>
      </Grid>
      </div>
    </Container>
    <div className="together">
        <h4>Together we are stronger!</h4>
        <p className="mt-4">All generated fees from different features will be invested back in POSI and in our Community. Position Exchange’s team will not receive any of the fees! We invest our hard work in the potential value of the token.</p>
     </div>
    </Fragment>
    )
}

