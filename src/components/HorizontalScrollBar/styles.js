import { makeStyles } from '@mui/styles';

const sharedStyles = {
  cursor: 'pointer',
  background: 'transparent',
  outline: 'none',
  border: ' none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FF2625',
  fontSize: '25px',
  borderRadius: '4px',
  position: 'absolute',
  bottom: '-20px',
  right: ' 80px',
  transform: 'scale(1, 1)',
  transition: '0.3s all ease-in-out',
  '&:hover': {
    transform: 'scale(1.3, 1.3)',
  },
};

export default makeStyles((theme) => ({
  leftArrow: {
    [theme.breakpoints.up('lg')]: {
      position: 'static !important',
    },
    ...sharedStyles,
  },
  rightArrow: {
    [theme.breakpoints.up('lg')]: {
      position: 'static !important',
    },
    right: '140px',
    ...sharedStyles,
  },
}
));
