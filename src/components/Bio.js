import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
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

const About = styled.p`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <Wrapper>
          <Avatar src={profilePic} alt={author} />
          <About>
            <p>Code. Design. Algorithms.</p>
          </About>
        </Wrapper>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
