import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail/Detail';
import ExerciseVideos from '../components/ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises/SimilarExercises';

function ExerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/video/related';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercoses/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetail);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
