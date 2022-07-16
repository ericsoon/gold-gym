import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';

function Home() {
  console.log('home');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home;
