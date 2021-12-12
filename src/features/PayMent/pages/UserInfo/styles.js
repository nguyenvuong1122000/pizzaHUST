import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '12px 28px 34px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',

    '& span': {
      fontSize: '18px',
      lineHeight: 22 / 18,
      fontWeight: 700,
    },
  },

  userForm: {
    margin: '30px 0 0 0',
    flex: 1,
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      borderColor: '#ff8000',
      '&:hover': {
        borderColor: '#ff8000',
      },
    },
    '& .MuiFormLabel-root': {
      // color: "#ff8000"
    },
    '& .MuiFormLabel-filled': {
      // color: "#ff8000"
      borderColor: '#ff8000',
    },
    '& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#ff8000',
    },
    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#ff8000',
      },
    '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      // borderColor: '#ff8000',
    },
  },
});

export { useStyles };
