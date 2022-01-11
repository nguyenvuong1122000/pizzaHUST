import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import { Box, Rating, Button, Snackbar, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    padding: '20px 10px',
    borderRadius: '40px',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  fee: {
    textAlign: 'end',
    marginTop: '20px',
    '& > span:first-child': {
      fontSize: '18px',
      paddingRight: '60px',
      fontWeight: 700,
    },
    '& > span:last-child': {
      fontSize: '16px',
      fontWeight: 700,
      '& span': {
        color: '#ff8000',
        margin: '0 28px 0 4px',
      },
    },
  },

  rate: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0 10px 20px',
    '& > span': {
      fontWeight: 600,
      marginRight: '10px',
    },
    '& button, & button:hover': {
      backgroundColor: '#ff8000',
    },
  },
});

export default function ProductList({
  orderpizza,
  orderside,
  cost_fields,
  isHistory,
}) {
  const classes = useStyles();
  const [rateValue, setRateValue] = useState(0);
  const [disable, setDisable] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);

  // console.log(orderpizza);
  // console.log(orderside);
  const handleRateClick = () => {
    setDisable(true);
    setOpenNoti(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNoti(false);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.list}>
        {orderpizza.map((item) => (
          <ProductItem key={item.pk} item={item} />
        ))}
        {orderside.map((item) => (
          <ProductItem key={item.pk} item={item} />
        ))}
      </Box>
      <Box className={classes.fee}>
        <span>Tổng thanh toán</span>
        <span>
          {cost_fields + 22000}
          <span>đ</span>
        </span>
      </Box>
      <Box
        className={classes.rate}
        sx={{ display: isHistory ? 'flex' : 'none' }}
      >
        <span>Đánh giá: </span>
        <Rating
          readOnly={disable /* || nếu đã đánh giá */}
          value={rateValue}
          onChange={(event, newValue) => {
            setRateValue(newValue);
          }}
        />
        {!disable /* && nếu chưa đánh giá */ && (
          <Button variant="contained" size="small" onClick={handleRateClick}>
            Send
          </Button>
        )}
      </Box>
      <Snackbar
        open={openNoti}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error">
          Cảm ơn phản hồi của bạn
        </Alert>
      </Snackbar>
    </Box>
  );
}
