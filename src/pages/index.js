import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import Video from '../components/Video';

const Home = ({ data }) => (
  <Layout title="YouTube">
    <Box p={2}>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
            <Video item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Layout>
);

export async function getStaticProps(context) {
  const data = [
    {
      id: 1,
      title: 'Era uma vez uma garota chmanada ariel',
      authorId: 1,
      authorName: 'Ana Paula',
      authorAvatar: 'avatarURL',
      views: 10,
      thumb: '/thumbs/next01',
      videoURL: 'videoUrl',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Era uma vez uma garota chmanada ariel PARTE 2',
      authorId: 2,
      authorName: 'Ana Julia',
      authorAvatar: 'avatarURL',
      views: 5,
      thumb: '/thumbs/next01',
      videoURL: 'videoUrl',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Era uma vez uma garota chmanada ariel PARTE 3',
      authorId: 3,
      authorName: 'Ana',
      authorAvatar: 'avatarURL',
      views: 4,
      thumb: '/thumbs/next01',
      videoURL: 'videoUrl',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
