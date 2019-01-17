import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return location.pathname === rootPath ? (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <StyledLink to={`/`}>{title}</StyledLink>
    </h1>
  ) : (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <StyledLink to={`/`}>{title}</StyledLink>
    </h3>
  )
}

const Layout = props => (
  <Wrapper>
    <Header {...props} />
    {props.children}
  </Wrapper>
)

export default Layout
