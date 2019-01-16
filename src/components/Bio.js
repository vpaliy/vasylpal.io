import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: rhythm(2.5);
`

const Avatar = styled.img`
  margin-right: rhythm(1 / 2),
  margin-bottom: 0,
  width: rhythm(2);
  height: rhythm(2);
  border-radius: 100%;
`

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <Wrapper>
          <Avatar src={data.avatar.childImageSharp.fixed} alt={author} />
          <p>
            Personal blog by <strong>{author}</strong>.
          </p>
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
