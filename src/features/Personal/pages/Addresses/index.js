import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import AddressForm from './components/AddressForm';

export default function Addresses({ data }) {
  const navigate = useNavigate();
  
  const handleChange = (values) => {
    console.log(values);
    values = {
      ...data,
      ...values
    }
    var url_post = data.url;
    fetch(url_post, {
      method: 'PUT', // thêm mới thì dùng post
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values), // chuyển dữ liệu object trên thành chuỗi json
    })
      .then((response) => {
        if (response.ok){
          console.log('Success:', data); // ghi log kết quả hoàn thành
          alert('Thay đổi thông tin thành công');
          setTimeout(() => {
            navigate('/home', { replace: true });
          }, 1000);
        }
      }) // chuyển kết quả trả về thành json object
      .then((data) => {
        // bạn có thể làm gì đó với kết quả cuối cùng này thì làm
      })
      .catch((error) => {
        console.error('Error:', error); // ghi log nếu xảy ra lỗi
      });
  };

  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="add-address__text">Chỉnh sửa thông tin </h2>
        <AddressForm onSubmit={handleChange} data={data}/>
      </Grid>
    </Grid>
  );
}

// const addresses = [
//   {
//     id: 1,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: true,
//   },
//   {
//     id: 2,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: false,
//   },
// ];
