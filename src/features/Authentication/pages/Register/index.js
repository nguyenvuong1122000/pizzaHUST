import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import useStyles from '../Login/styles';
import { useNavigate } from 'react-router-dom';
import InformationForm from './components/InformationForm';

export default function Register() {
  const classes = useStyles();
  const [openInfoForm, setOpenInfoForm] = useState(false);
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({});

  
  const handleRegister = (values) => {
    console.log('values', values);
    const userApi = "http://127.0.0.1:8000/api/register/";
    const postApi = (userInp) => {
      var e = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInp),
      };
      fetch(userApi, e)
        .then((res) => {
          setOpenInfoForm(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
      console.log(openInfoForm);
      setDataRegister({
        username: values.username,
        phone: values.phone,
        password: values.password,
      });
      var [a, b, c] = [values.username, values.email, values.password];
      var userInp = {
        username: a,
        email: b,
        password: c,
      };
      
      postApi(userInp)
      // api register lan 1
  };

  const handleInfo = (values) => {
    console.log(openInfoForm);
      var url_post = 'http://127.0.0.1:8000/profile/';
      const postApi2 = (userInp) => {
        var e = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInp),
        };
        fetch(url_post, e)
          .then((res) => {
            if(res.ok) {
              res.json()
            }else{
              alert("Khong thanh cong")
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
      const newValues = {
        ...dataRegister,
        ...values,
        image: null,
      };
      console.log('newValues', newValues);
      // api register lan 2
      postApi2(newValues)
      navigate('/', { replace: true });
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.form}>
          <Box className={classes.logo}>
            <img srcSet={process.env.PUBLIC_URL + 'pizzaLogo.png 2x'} alt="" />
          </Box>
          <Box className={classes.title}>Đăng ký</Box>
          <Box sx={{ ml: 2 }}>
            {openInfoForm ? (
              <InformationForm onSubmit={handleRegister} />
            ) : (
              <Box>
                <RegisterForm onSubmit={handleInfo} />
                Đã có tài khoản?{' '}
                <Box
                  onClick={() => navigate('/login', { replace: true })}
                  className={classes.auth}
                >
                  Đăng nhập
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box className={classes.image}>
        <img src={process.env.PUBLIC_URL + 'auth.png'} alt="" />
      </Box>
    </Box>
  );
}
