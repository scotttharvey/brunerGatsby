import React from "react"
import styled from "@emotion/styled"
import space from '../images/bg-space.png'

import Nav from './nav'
import Hero from './hero'

const StyledHeader = styled.header`
  background-image: url(${space});
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 1.45rem;
  padding-top: 3rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Nav />
      <Hero />
  </StyledHeader>
)

export default Header
