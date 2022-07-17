import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  bodyPartCard: {
    transform: 'scale(1, 1)',
    transition: '0.3s all ease-in-out',
    '&:hover': {
      transform: 'scale(1.1, 1.1)',
    },
  },
}));
