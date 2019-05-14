import React from "react"
import styled from "@emotion/styled"
import footerBg from '../images/bg-footer.jpg'

import FooterContent from './footerContent'

const StyledFooter = styled.footer`
  position: relative;
  background-image: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 40em;
  margin: auto;
`

const Footer = () => (
  <StyledFooter>
      <FooterContent />
  </StyledFooter>
)

export default Footer