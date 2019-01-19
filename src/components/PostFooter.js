import React from 'react'
import styled from 'styled-components'
import profilePic from '../../content/assets/profile-pic.jpg'
import Tags from './Tags'
import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
`

const About = styled.div`
  margin-left: 15px;
  width: 250px;
`

const Header = ({ title }) => (
  <h1
    style={{
      ...scale(1),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    }}
  >
    {title}
  </h1>
)

const PostFooter = () => (
  <Wrapper>
    <Avatar src={profilePic} alt="Vasyl Paliy" />
    <About>
      <Header title="Vasyl Paliy" />
    </About>
  </Wrapper>
)

export default PostFooter
