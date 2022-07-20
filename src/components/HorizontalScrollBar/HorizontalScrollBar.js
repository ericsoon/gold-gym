import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from '../BoydPart/BodyPart';
import ExerciseCart from '../ExerciseCard/ExerciseCard';
import useStyles from './styles';

import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);
  const classes = useStyles();
  return (
    <Typography onClick={() => scrollPrev()} className={classes.rightArrow}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);
  const classes = useStyles();
  return (
    <Typography onClick={() => scrollNext()} className={classes.leftArrow}>
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts
            ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            : (
              <ExerciseCart exercise={item} />
            )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
