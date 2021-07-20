import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MetaIco from '../../media/metamask.svg';
import TrustIco from '../../media/TWT.svg';
import MathIco from '../../media/Logo_Icon_White.svg';
import TPIco from '../../media/tp.jpg';
import WCIco from '../../media/walletconnect-logo.svg';
import BcwIco from '../../media/binance-coin-bnb-logo.svg';
import SafeIco from '../../media/safepal-sfp-logo.svg';

export default function allWallet() {
  const trigger = async() => {
    await alert("Working");
  }
  return (
    <List>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="metamask" src={MetaIco} />
        </ListItemAvatar>
        <ListItemText primary="Metamask" />
      </ListItem>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="TrustWallet" src={TrustIco} />
        </ListItemAvatar>
        <ListItemText primary="TrustWallet" />
      </ListItem>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="MathWallet" src={MathIco} />
        </ListItemAvatar>
        <ListItemText primary="MathWallet" />
      </ListItem>
      
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="TokenPocket" src={TPIco} />
        </ListItemAvatar>
        <ListItemText primary="TokenPocket" />
      </ListItem>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="WalletConnect" src={WCIco} />
        </ListItemAvatar>
        <ListItemText primary="WalletConnect" />
      </ListItem>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="Binance Chain Wallet" src={BcwIco} />
        </ListItemAvatar>
        <ListItemText primary="Binance Chain Wallet" />
      </ListItem>
      <ListItem 
      button
      onClick={trigger}>
        <ListItemAvatar>
          <Avatar alt="SafePal Wallet" src={SafeIco} />
        </ListItemAvatar>
        <ListItemText primary="SafePal Wallet" />
      </ListItem>
    </List>
  );
}
