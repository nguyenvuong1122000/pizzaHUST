import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
  },

  body: {
    marginTop: '20px',
    '& > span': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '22px',
    },
  },

  header: {
    '& img': {
      marginTop: '77px',
      width: '100%',
    },
  },

  searchBox: {
    position: 'fixed',
    zIndex: 1,
    // backgroundColor: '#FFF2F2',
    // height: '77px',
    // width: '100%',
    top: '27px',
    left: '565px',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    '& svg': {
      marginLeft: '-25px',
      verticalAlign: 'middle',
    },
  },

  searchBtn: {
    // margin: '25px auto auto 420px ',
    height: '27px',
    width: '163px',
    border: 'none',
    outline: 'none',
    borderRadius: '45px',
    padding: '0 19px',
    boxSizing: 'border-box',
  },

  header__search: {
    position: 'sticky',
    top: '0px',
    right: '0',
    float: 'right',
  },
  header__input_search: {
    width: '250px',
    height: '40px',
    borderRadius: '20px',
    outline: 'none',
    border: '1px solid #fff',
    color: '#666',
    padding: '0 20px',
  },
  header__icon__search: {
    width: '17px',
    height: '17px',
    color: '#333',
    fontWeight: 500,
    position: 'relative',
    top: '-2px',
    left: '-40px',
  },

  category: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '22px',
  },

  item: {
    width: '87px',
    height: '115px',
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
    boxShadow:
      '4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)',
    transition: 'transform 0.5s',

    '&.active': {
      backgroundColor: '#FF8000',
      color: '#fff',
      transition: 'transform 0.5s',
      '& span': {
        transform: 'rotate(90deg)',
        // stroke: '#FF8000',
        '& circle': {
          fill: '#fff',
        },
        '& path': {
          stroke: '#FF8000',
        },
      },
    },

    '& p': {
      marginTop: '10px',
      textAlign: 'center',
      marginBottom: '6px',
      height: '15px',
    },
  },

  circle: {
    height: '40px',
    borderRadius: '50%',
    marginTop: '8px',
    backgroundColor: '#fff',
    '& svg': {
      width: '100%',
      height: '100%',
      fill: '#ff8000',
    },
  },

  arrow: {
    marginTop: '12px',
    borderRadius: '20px',
  },
});

export { useStyles };
