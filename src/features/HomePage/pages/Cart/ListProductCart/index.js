import React, { useState } from 'react';
import { Box, Divider, Popover, Tooltip, Typography } from '@mui/material';
import Button from 'components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { AddBtnClick, DelBtnClick, SubBtnClick } from 'features/Slice/index.js';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ListProductCart({ cart }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // Hiện thông tin chi tiết sản phẩm khi hover
  const [openId, setOpenId] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (id, event) => {
    setOpenId(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenId(undefined);
    setAnchorEl(null);
  };

  // Thay đổi sản phẩm
  const onSubBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(SubBtnClick(idx));
  };

  const onAddBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(AddBtnClick(idx));
  };

  const onDelBtnClick = (id) => {
    const idx = cart.findIndex((item) => item.id === id);
    dispatch(DelBtnClick(idx));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img
          srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'}
          alt=""
          style={{ marginLeft: 'auto', display: 'block' }}
        />
      </Box>
      <Box className={classes.product}>
        <Box className={classes.text}>
          <span style={{ fontSize: '18px', fontWeight: 700 }}>Giỏ hàng</span>
        </Box>
        <Box className={classes.productList}>
          <>
            {cart.map((item) => (
              <Box key={item.id} className={classes.productItem}>
                <img src={process.env.PUBLIC_URL + `${item.srcImg}`} alt="" />
                <Box className={classes.itemInfo}>
                  <p
                    onMouseEnter={(event) => handlePopoverOpen(item.id, event)}
                    onMouseLeave={handlePopoverClose}
                  >
                    {item.name}
                  </p>
                  <Popover
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={item.id === openId}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 1 }}>
                      {item.size}, {item.sole},{' '}
                      {item.topping ? item.topping : 'Không topping'}
                    </Typography>
                  </Popover>
                  <Box className={classes.quantity}>
                    <Box onClick={() => onSubBtnClick(item.id)}>
                      <RemoveIcon sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Box sx={{ margin: '0 10px' }}>{item.quantity}</Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Box onClick={() => onAddBtnClick(item.id)}>
                      <AddIcon sx={{ cursor: 'pointer' }} />
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.cost}>
                  <Tooltip title="Delete">
                    <HighlightOffIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => onDelBtnClick(item.id)}
                    />
                  </Tooltip>
                  <span>{item.cost * item.quantity} đ</span>
                </Box>
              </Box>
            ))}
          </>
        </Box>
      </Box>
      <Button name={'Mua hàng'} />
    </Box>
  );
}
