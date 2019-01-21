import React from 'react';
import styled from 'styled-components';
import profilePic from '../../content/assets/profile-pic.jpg';
import Tags from './Tags';
import { rhythm, scale } from '../utils/typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
`;

const About = styled.div`
  margin-left: 15px;
  width: 250px;
`;

const Header = ({ title }) => (
  <h1
    style={{
      ...scale(0.75),
      color: '#536dfe',
      marginBottom: rhythm(0.75),
      marginTop: 0,
    }}
  >
    {title}
  </h1>
);

const PostFooter = () => (
  <Wrapper>
    <Header title="Vasyl Paliy" />
    <Row>
      <Avatar src={profilePic} alt="Vasyl Paliy" />
      <About>
        <Tags
          tags={['Java', 'Kotlin', 'C++', 'C', 'Python', 'Rust', 'JavaScript']}
        />
      </About>
    </Row>
  </Wrapper>
);

export default PostFooter;
