import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import AddressForm from './components/AddressForm';

export default function Addresses({ data }) {
  const navigate = useNavigate();
  // const [newData, setNewData] = useState({
  //   name: data.name,
  //   email: data.email,
  //   number_phone: data.number_phone,
  //   address: data.address,
  // });

  // const handleChangeData = (s) => {
  //   console.log(newData);
  //   var dataPost = {
  //     ...newData,
  //     pub_date: data.pub_date,
  //     user: data.user,
  //     image: null,
  //   };
  //   var url_post = data.url;
  //   fetch(url_post, {
  //     method: 'PUT', // thêm mới thì dùng post
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
  //   })
  //     .then((response) => response.json()) // chuyển kết quả trả về thành json object
  //     .then((data) => {
  //       // bạn có thể làm gì đó với kết quả cuối cùng này thì làm

  //       console.log('Success:', data); // ghi log kết quả hoàn thành
  //       alert('Thay doi thong tin thanh cong');
  //       setTimeout(() => {
  //         navigate('/home', { replace: true });
  //       }, 1000);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error); // ghi log nếu xảy ra lỗi
  //     });
  // };
  const handleChange = (values) => {
    console.log(values);
  };

  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="add-address__text">Chỉnh sửa thông tin </h2>
        <AddressForm onSubmit={handleChange} />
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
