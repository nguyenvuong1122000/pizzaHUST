import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Item from 'features/HomePage/components/Item';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  root: {},
  body: {
  marginTop: '100px',
    display: 'flex',
    columnGap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-around"
 
  },

  moreBtn: {
    width: '100%',
    background: 'linear-gradient(45deg, #f59838  30%, #ffca53 90%)',
    borderRadius: '30px !important',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function Pizza() {
  const classes = useStyles();
  const [limit, setLimit] = useState(3);

  function handleMoreBtn() {
    if (limit < breakfastList.length) {
      setLimit(limit + 6);
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        {breakfastList.slice(0, limit).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
      <Button
        className={classes.moreBtn}
        sx={{ display: limit >= breakfastList.length ? 'none' : '' }}
        variant="contained"
        onClick={handleMoreBtn}
      >
        Xem thêm
      </Button>
    </Box>
  );
}

const breakfastList = [
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 2',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào 3',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
  {
    id: v4(),
    srcImg: 'pizza.png',
    name: 'Pizza Hải Sản Đào',
    quantity: 1,
    rating: 5,
    cost: 69000,
    desc: '',
  },
];
