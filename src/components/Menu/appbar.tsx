import React,{forwardRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import {Container, Row, Col} from 'react-bootstrap';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../media/logo.png';
import AllWallet from '../Wallet/all';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#9830FF',
  },
  title: {
    textAlign: "center",
    maxWidth: "50vw",
   [theme.breakpoints.up('md')]: {
     maxWidth: "198px",
     maxHeight: "120px",
     marginLeft: "17em",
     marginRight: "17em"
   },
  },
 appBar: {
   background: "#282C34",
   color: "#fff"
 },
 connect: {
   background: "#9830FF",
   color: '#fff',
   float: 'right',
   textTransform: 'capitalize',
   paddingLeft: "20px",
   paddingRight: "20px",
   borderRadius: "5em",
   "&:hover": {
      backgroundColor: "#9830FF",
    },
 },
 wallet: {
   fontWeight:'bold',
   textAlign: 'center',
   marginTop: '1rem'
 },
 icon: {
   float: 'right',
 },
 dialog: {
   padding: "2rem",
 },
 wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
   }
}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" className={classes.title} />
        <div className="right">
         <Button onClick={handleClickOpen}
            className={classes.connect}>Connect</Button>
        </div>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        PaperProps={{
        style: {
               backgroundColor: '#282C34',
               color: '#fff',
               width: '80vw',
               borderRadius: "1em",
               textTransform: 'capitalize',
        },
       }}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
      <Container>
       <Row>
        <Col>
          <h4 className={classes.wallet}>Connect to a wallet <CloseIcon onClick={handleClose} className={classes.icon} /></h4>
        </Col>
       </Row>
      </Container>
        <DialogContent>
          <AllWallet />
        </DialogContent>
      </Dialog>
    </div>
  );
}
