import React, { useState } from 'react';
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyAllRequest } from 'features/Slice';
import { useStyles } from './styles';
import './styles.css';

export default function UserInfo() {
  const classes = useStyles();
  const [buySuccess, setBuySuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBuyBtn(event) {
    event.preventDefault();
    dispatch(buyAllRequest());
    setBuySuccess(true);
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1000);
  }

  function handleClose() {
    setBuySuccess(false);
  }

  return (
    <Box className={classes.root} height={{md: "100vh"}}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box
        component="form"
        className={classes.userInfo}
        onSubmit={handleBuyBtn}
      >
        <span>Thông tin thanh toán</span>
        <Box className={classes.userForm}>
          <TextField
            margin="normal"
            autoFocus
            required
            fullWidth
            id="name"
            placeholder="Họ và tên"
            name="Name"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            placeholder="Số điện thoại"
            name="Phone"
            sx={{ mt: 2, mb: 2 }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            placeholder="Email"
            name="Email"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            placeholder="Địa chỉ"
            name="Address"
            sx={{ mt: 2, mb: 2 }}
          />
        </Box>
        <Button type="submit" name={'Mua hàng'} />
      </Box>
      <Snackbar
        open={buySuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Buy Successfull! Thank you!
        </Alert>
      </Snackbar>
    </Box>
  );
}
