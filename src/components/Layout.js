import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'
import bulbIcon from '../../content/assets/bulb.json'
import AnimationBuilder from './Animation'

const Logo = new AnimationBuilder(bulbIcon)
  .withHeight(rhythm(2.5))
  .withWidth(rhythm(2.5))
  .withLoop(true)
  .withAutoplay(true)
  .build()

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

const Row = styled.div`
  display: flex;
  align-items: center;
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
        ...scale(0.75),
        color: "#536DFE",
        fontFamily: `Montserrat, sans-serif`,
        marginLeft: rhythm(-1),
        marginTop: rhythm(-0.75),
        marginBottom: 0,
      }}
    >
      <StyledLink to={`/`}>
        <Row>
          <Logo />
          {title}
        </Row>
      </StyledLink>
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
