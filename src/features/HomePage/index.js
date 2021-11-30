import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from 'components/NavBar';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/Cart';
import MainPage from './pages/Main';
import Pizza from './pages/Pizza';
import Pasta from './pages/Pasta';

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

  cart: {},
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={1} className={classes.nav}>
          <NavBar className={classes.navBar} />
        </Grid>
        <Grid className={classes.main} item xs={7}>
          <MainPage />
          <Routes>
            <Route path="/" element={<Navigate to="/pizza" />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/pasta" element={<Pasta />} />
          </Routes>
        </Grid>
        <Grid className={classes.cart} item xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}
