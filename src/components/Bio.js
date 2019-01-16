import React from 'react'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import profilePic from '../../content/assets/profile-pic.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: rhythm(2.5);
`

const Avatar = styled.img`
  margin-bottom: 0;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const Bio = () => (
  <Wrapper>
    <Avatar src={profilePic} alt="Vasyl Paliy" />
  </Wrapper>
)

export default Bio
