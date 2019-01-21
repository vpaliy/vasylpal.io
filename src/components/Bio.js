import React from 'react';
import { rhythm } from '../utils/typography';
import styled from 'styled-components';
import profilePic from '../../content/assets/profile-pic.jpg';
import Tags from './Tags';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const About = styled.div`
  margin-left: 15px;
  width: 250px;
`;

const Bio = () => (
  <Wrapper>
    <Avatar src={profilePic} alt="Vasyl Paliy" />
    <About>
      <Tags
        tags={['Java', 'Kotlin', 'C++', 'C', 'Python', 'Rust', 'JavaScript']}
      />
    </About>
  </Wrapper>
);

export default Bio;
