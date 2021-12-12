import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import PayCard from './pages/PayCart';
import UserInfo from './pages/UserInfo';
import NavBar from 'components/NavBar';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
  },
});

export default function Pay() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.navBar} item display={{xs: "none", md: "unset"}} md={1}>
        <NavBar />
      </Grid>
      <Grid padding={"25px"} className={classes.main} item xs={12} md={7}>
        <PayCard />
      </Grid>
      <Grid padding={{xs: "25px", md: "0px"}} className={classes.userInfo} item xs={12} md={4}>
        <UserInfo />
      </Grid>
    </Grid>
  );
}
