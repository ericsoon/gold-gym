import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  detailImage: {
    width: '729px',
    height: '742px',
    [theme.breakpoints.down('lg')]: {
      width: '300px',
      height: '300px',
    },
  },
  icon: {
    width: '50px',
    height: '50px',
  },
}));
