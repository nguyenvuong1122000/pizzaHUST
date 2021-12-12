import { Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Header from './pages/Header';
import Menu from './pages/Menu';
import { BsCart2 } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import {useState, useRef} from 'react';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
    display: 'flex',
  },

  navBar: {},

  main: {
    padding: '0 40px 40px',
    flex: 1,
    overflow: 'auto',
    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#fff2e0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ff8000',
      borderRadius: '10px',
    },
  },

  cart: {
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 2000
  },
});

export default function HomePage() {
  const classes = useStyles();
  const [isShowCartSideBar, setIsShowCartSideBar] = useState(false);
  const toggleCartSideBar = () => {
    setIsShowCartSideBar(!isShowCartSideBar);
  }

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} className={classes.nav}>
          <NavBar className={classes.navBar} />
        </Grid>
        <Grid className={classes.main} item>
          <Header />
          <Category />
          <Menu />
        </Grid>
        <Grid className={classes.cart} item xs={10} display={{xs: (isShowCartSideBar ? "unset" : "none")}} md={4}>
         <IconButton display={{md: "none",xs: "unset"}} backgroundColor="white" size={"large"}  
   style={
      {position: "absolute",backgroundColor: "white", boxShadow: "rgb(0 0 0 / 6%) 5px 0px 25px 0px", top: "20px", left: "10px"}} onClick={toggleCartSideBar}  >
        <IoExitOutline />
    </IconButton>
          <Cart />
        </Grid>

      </Grid>
    <IconButton  backgroundColor="white" size={"large"} style={
      {position: "fixed",backgroundColor: "white", boxShadow: "rgb(0 0 0 / 6%) 5px 0px 25px 0px", bottom: "20px", right: "20px"}} onClick={toggleCartSideBar} >
        <BsCart2 />

    </IconButton>
    </>
  );
}
