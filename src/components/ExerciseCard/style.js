import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  exerciseCard: {
    width: '400px',
    height: '445px',
    background: '#fff',
    borderTop: '4px solid #FF2625',
    borderBottomLeftRadius: '20px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: '10px',
    transform: 'scale(1, 1)',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'scale(1.1, 1.1)',
    },
  },
}));
