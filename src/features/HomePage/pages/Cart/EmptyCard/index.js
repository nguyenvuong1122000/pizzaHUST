import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from 'components/Button';

const useStyles = makeStyles({
  root: {
    padding: '77px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    textAlign: "center",
    height: '100vh',
    justifyContent: "space-around",
    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 22 / 18,
    },
  },

  body: {
    flex: 1,
    marginTop: '85px',
    
  },
});

export default function EmptyCard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <span>Giỏ hàng</span>
        <img srcSet={process.env.PUBLIC_URL + 'empty.png 2x'} alt="" />
        <p>Giỏ hàng trống, vui lòng chọn sản phẩm</p>
      <Button name={'Mua hàng'} disable />
    </Box>
  );
}
