import React from "react"
import styled from "@emotion/styled"

import Accordian from "./accordian"

const StyledFaqs = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  h2 {
    text-align: center;
  }

`

const Faq = () => (
  <StyledFaqs className="container">
    <h2>Brüner Dynamics FAQs</h2>

    <Accordian q="Is James listening to my conversation?" a="What is life anyways" />
    <Accordian q="Why should I get Brüner Dynamics?" a="Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”" />
    <Accordian q="Who is the guy who keeps walking in front of my place? Is that Ralph?" a="What is life anyways" />
    <Accordian q="Where does space start?" a="An excellent question. At bruner dynamics, we generally see space as any matter, atmosphere, or void not curretnly occupied by James Bruner. Therefore, space starts and ends with Mr. Bruner. " />
  </StyledFaqs>
)

export default Faq