import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  heroBannerImg: {
    position: 'absolute',
    right: ' 40px',
    top: '0px',
    width: '700px',
    height: '900px',
    marginTop: '-330px',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));
