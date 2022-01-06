import { Box, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import NavBarLeft from 'components/NavBarLeft';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from './pages/Account';
import Addresses from './pages/Addresses';
import Order from './pages/Order';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './styles.css';
import { logout } from 'features/Authentication/slice';

export default function Personal() {
  const user = useSelector((state) => state.auth.username);
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const [activeId, setActiveId] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onTabClick = (id) => {
    setActiveId(id);
  };

  // console.log(user);
  // API
  const [data, setData] = useState([]);
  const api = `http://127.0.0.1:8000/profile/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(api);
      const responseJSON = await response.json();
      setData(responseJSON);
    }
    getData();
  }, [api]);
  // console.log(data);

  const tabs = [
    {
      id: 1,
      name: 'Thông tin tài khoản',
      component: <Account data={data[0]} />,
    },
    {
      id: 2,
      name: 'Đơn hàng',
      component: <Order data={data[0]} />,
    },
    {
      id: 3,
      name: 'Địa chỉ',
      component: <Addresses />,
    },
  ];

  return (
    <Grid container className="content">
      <Grid item xs={1} display={tablet ? 'block' : 'none'}>
        <NavBarLeft />
      </Grid>
      <Grid item className="user-tabs" xs={3}>
        <img
          className="user-tabs__img"
          srcSet={process.env.PUBLIC_URL + 'user.png'}
          alt=""
        />
        <div>
          Hi,{' '}
          <span className="user-tabs__userName">
            {data.length && data[0].name}
          </span>
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="user-tabs__text"
            onClick={() => onTabClick(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </Grid>
      <Grid item xs={8}>
        <Box onClick={() => navigate('/', { replace: true })}>
          <img
            className="header__img"
            srcSet={process.env.PUBLIC_URL + 'img/logo.png'}
            alt=""
          />
        </Box>
        <div className="user-main">
          {tabs.map((tab) => (
            <Box key={tab.id}>{tab.id === activeId ? tab.component : null}</Box>
          ))}
        </div>
      </Grid>
      <Box
        className="log-out"
        display={tablet ? 'none' : 'block'}
        onClick={() => dispatch(logout())}
      >
        <LogoutOutlinedIcon sx={{ fontSize: 30 }} />
      </Box>
    </Grid>
  );
}
