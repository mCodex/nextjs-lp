import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import HomeHeader from '../../components/HomeHeader';
import 'semantic-ui-css/semantic.min.css';

// import { getPosts } from '../lib/api';

import './index.css';

import img1 from '../../static/img1.png';
import img2 from '../../static/img2.png';

const Home = () => {
  // const [isLoaded, setLoaded] = useState();
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const loadDataFromAPI = async () => {
  //     const APIPosts = await getPosts();
  //     return setPosts(APIPosts);
  //   };

  //   loadDataFromAPI();
  //   setLoaded(true);
  // }, [posts]);

  // if (!isLoaded) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <HomeHeader />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="center">
            <Image src={img1} size="medium" circular floated="right" />
          </Grid.Column>
          <Grid.Column>
            <Image src={img2} size="medium" circular />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="blockBuster">
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h2" style={{ color: '#fff' }}>
              Lorem Ipsum Sit
            </Header>
            <Header as="h3" style={{ color: '#fff' }}>
              Lorem Ipsum Sit
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
