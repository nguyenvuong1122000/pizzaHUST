import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from 'features/PayMent/pages/PayCart/styles';

export default function ProductItem({ item }) {
  const classes = useStyles();
  console.log(item)
  return (
    <Box className={classes.root}>
      <Box
        className={classes.productItem}
        sx={{ height: '80px', borderRadius: '57px' }}
      >
        <img
          src={item.pizzaa ? item.pizzaa.image : item.sidedis.image}
          style={{ marginLeft: '-10px' }}
          alt=""
        />
        <Box className={classes.itemInfo}>
          <p>{item.pizzaa ? item.pizzaa.name : item.sidedis.name}</p>

          <Box className={classes.quantity}>
            <span style={{ margin: '0 20px' }}>{item.pizzaa ? item.pizzaa.cost : item.sidedis.cost}</span>
          </Box>
          <p style={{ fontSize: '10px', lineHeight: 6 / 5 }}>
            {item.size || ''}, {item.soles || ''},{' '}
            {item.topping ? item.topping : ''}
          </p>
        </Box>
        <Box className={classes.cost}>
          <span>
            {item.pizzaa ? item.pizzaa.cost : item.sidedis.cost}
            <span style={{ color: '#ff8000' }}>đ</span>
          </span>
        </Box>
      </Box>
    </Box>
  );
}
