import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  padding-top: 3rem;
  flex-shrink: 0;
`

const StyledLink = styled.a`
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  color: black;
  &:hover {
    color: #007acc;
  }
`

const IconLink = ({ href, icon }) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} size="2x" />
  </StyledLink>
)

const Footer = () => (
  <Wrapper>
    <IconLink href="https://www.github.com/vpaliy" icon={faGithub} />
    <IconLink href="https://twitter.com/vpaliy_" icon={faTwitter} />
    <IconLink href="https://www.linkedin.com/in/vpaliyx/" icon={faLinkedinIn} />
  </Wrapper>
)

export default Footer
