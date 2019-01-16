import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  padding-top: 3rem;
`

const Link = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
)

const Footer = () => (
  <Wrapper>
    <Link href="https://twitter.com/vpaliy_">twitter</Link>
    <Link href="https://github.com/vpaliy">github</Link>
    <Link href="https://www.linkedin.com/in/vpaliyx/">linkedin</Link>
  </Wrapper>
)

export default Footer
