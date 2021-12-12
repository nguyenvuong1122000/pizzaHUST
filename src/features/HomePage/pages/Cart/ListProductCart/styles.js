import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  product: {
    display: 'flex',
    flexDirection: 'column',
   
    marginTop: '18px',
    overflow: 'auto',
    marginBottom: '40px',
  },

  productList: {
    flex: 1,
    overflow: "scroll",
    paddingTop: "20px",
    /* width */
    '&::-webkit-scrollbar': {
      width: '5px',
      borderRadius: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#fff2e0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#ff8000',
      borderRadius: '10px',
    },
  },

  text: {
    '& span:last-child': {
      float: 'right',
    },
    marginBottom: '30px',
  },

  productItem: {
    height: '80px',
    backgroundColor: '#FFECD1',
    display: 'flex',
    fontSize: "0.85em",
    alignItems: 'center',
    marginBottom: '24px',
    borderRadius: '57px',

    '& img': {
      width: '100px',
      marginLeft: '-5px',
    },

    '& p': {
      margin: '6px 0 2px 0',
    },
  },

  itemInfo: {
    flex: 1,

    '& p': {
      fontWeight: 500,
    },

    '& p:nth-child(2)': {
      fontSize: '10px',
    },
  },

  itemName: {
    display: 'WebkitBox',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    maxHeight: '2.4rem',
    fontWeight: 600,
    // overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },

  quantity: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '-8px',
    fontWeight: 700,
    '& > div': {
      padding: '0 5px',
    },
  },

  cost: {
    marginRight: '20px',
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    height: '55px',
    justifyContent: 'space-around',
  },
});

export { useStyles };
