import React from "react"
import styled from "@emotion/styled"
import SimpleCard from "./cardSimple"

const StyledPayUs = styled.div`
  margin: auto;

  h2 {
    margin: auto;
    margin-bottom: 24px;
    text-align: center;
    max-width: 500px;
  }

  div {
    display: flex;

    @media (max-width: ${808}px) {
      flex-direction: column;
    }
  }

`

const PayUs = () => (
  <StyledPayUs className="container">
    <h2>
      It Is Possible to Pay Us More Money
    </h2>
    <div>
      <SimpleCard cardName="Easy Care"
      copy="For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime. "/>
      <SimpleCard cardName="Voice"
      copy="The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms." />
      <SimpleCard cardName="DIRECTV"
      copy="If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.  "/>
    </div>
  </StyledPayUs>
)

export default PayUs;