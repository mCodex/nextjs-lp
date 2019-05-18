import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Image, Header, Container, Button } from 'semantic-ui-react';
import HomeHeader from '../../components/HomeHeader';
import 'semantic-ui-css/semantic.min.css';

// import { getPosts } from '../lib/api';

import './index.css';

import img1 from '../../static/img1.png';
import img2 from '../../static/img2.png';
import handsImg from '../../static/hands.png';

const testimonials = [
  {
    text: ` Donec tristique eros dolor, non pellentesque eros mattis sed. Integer varius mi
    non risus aliquam congue. Mauris vel dui a odio ultrices efficitur. Nam porta nunc
    sed erat euismod suscipit. Fusce maximus in risus quis mollis. Etiam enim nulla,
    gravida ut vehicula in, porttitor vehicula enim. Maecenas dignissim neque ac metus
    sollicitudin accumsan.`,
    by: 'John Doe'
  },
  {
    text: `Aenean aliquet velit at nisi laoreet, in tristique justo sagittis. Aliquam accumsan
    vel elit eu facilisis. Vestibulum ornare vulputate ex, id aliquet orci finibus ac.
    Duis suscipit pharetra cursus. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Nam id rhoncus dolor. Fusce nec viverra lorem. Aenean maximus ante vel lacus
    viverra, vitae rutrum nisl feugiat. Pellentesque condimentum velit sed bibendum
    malesuada. Integer a ante sapien.`,
    by: 'Foo Bar'
  }
];

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
        <Grid.Row>
          <Grid.Column>
            {testimonials.map(({ text, by }, i) => (
              <div className="testimonialsContainer">
                <Container text textAlign="justified">
                  <p>
                    <i>{text}</i>
                  </p>
                </Container>
                <Container text textAlign="center">
                  <p>{`By: ${by}`}</p>
                </Container>
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          className="ctaDivBeforeFooter"
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url(${handsImg})`
          }}
        >
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h1" style={{ color: '#fff' }}>
              Start helping today
            </Header>
            <Button color="teal">Click Here</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ backgroundColor: '#eee' }}>
          <Grid.Column textAlign="center">
            <p>{`${new Date().getFullYear()} - mCodex`}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
