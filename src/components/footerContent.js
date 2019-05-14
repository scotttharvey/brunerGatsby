import React from "react"
import styled from "@emotion/styled"
import brunerFooter from "../images/bruner-logo-dark.png"
import { small } from "./mediaQuery"


const StyledFooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 1.45rem;
  padding-top: 36px;
  padding-bottom: 60px;

  ${small} {
    display: flex;
    justify-content: center;
  }

  section {
    position: absolute;
    max-width: 400px;
    padding-left: 24px;
  }

  div {
    text-align: left;
    color: black;
    border-top: 1px solid black;

    p {
      margin: 0;
    }

    .legal {
      font-size: 10px;
    }
  }
`

const FooterContent = () => (
    <StyledFooterContent>
      <section>
        <img src={brunerFooter} alt="Bruner Logo"/>

        <div>
          <p>Order Now</p>
          <strong>1.888.888.8888</strong>
          <p className="legal">© 2018. All rights reserved     Privacy Policy  |  Terms & Conditions</p>
        </div>
      </section>
    </StyledFooterContent>
)

export default FooterContent;