import React, { useState, useEffect } from 'react';
import { Grid, Card } from 'semantic-ui-react';

import Link from 'next/link';

import 'semantic-ui-css/semantic.min.css';

import { getPosts } from '../lib/api';

const Home = () => {
  const [isLoaded, setLoaded] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadDataFromAPI = async () => {
      const APIPosts = await getPosts();
      return setPosts(APIPosts);
    };

    loadDataFromAPI();
    setLoaded(true);
  }, [posts]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={8}>
          {posts.map(({ userId, title, body }, i) => (
            <Card key={i}>
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{`From User: ${userId}`}</Card.Meta>
                <Card.Description>{body}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
