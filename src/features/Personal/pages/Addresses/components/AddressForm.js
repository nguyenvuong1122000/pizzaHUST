import { Alert, Box, Snackbar } from '@mui/material';
import AuthButton from 'components/AuthButton';
import InputField from 'components/FormFields/InputField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .required('Please enter your full name.')
    .test('two-words', 'Enter at least 2 words.', (value) => {
      if (!value) return true;
      const parts = value?.split(' ') || [];
      return parts.filter((x) => !!x).length >= 2;
    }),
  email: yup
    .string()
    .email('Invalid email')
    .required('Please enter your email.'),
  number_phone: yup
    .number()
    .positive('Invalid phone number.')
    .required('Please enter your phone.')
    .typeError('Invalid phone number.'),
  address: yup.string().required('Please enter your address.'),
});

export default function AddressForm({ onSubmit, initialValues }) {
  const [error, setError] = useState('');

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const handleFormSubmit = (values) => {
    try {
      onSubmit?.(values);
    } catch (error) {
      setError(error.message);
    }
  };

  function handleClose() {
    setError('');
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box>Họ và tên</Box>
        <InputField name="name" control={control} />
        <Box sx={{ mt: 2 }}>Email</Box>
        <InputField name="email" control={control} />
        <Box sx={{ mt: 2 }}>Số điện thoại</Box>
        <InputField name="number_phone" control={control} />
        <Box sx={{ mt: 2 }}>Địa chỉ</Box>
        <InputField name="address" control={control} />
        <AuthButton name="Chỉnh sửa" />
      </form>
      <Snackbar
        open={error ? true : false}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
