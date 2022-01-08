import { TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import useStyles from './styles';

export default function InputField({
  name,
  control,
  placeholder,
  ...inputProps
}) {
  const classes = useStyles();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      size="small"
      // value={value}
      fullWidth
      margin="dense"
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      placeholder={placeholder}
      inputProps={inputProps}
    />
  );
}
