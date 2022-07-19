import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  exerciseVideo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '387px',
    height: '381px',
    textDecoration: 'none',
    [theme.breakpoints.down('lg')]: {
      width: '320px',
      height: '300px',
    },
  },

}));
