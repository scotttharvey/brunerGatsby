import React from "react"
import styled from "@emotion/styled"

import Card from "./card"

import { largeUp } from "./mediaQuery"

const StyledPlans = styled.div`

  h2 {
    text-align: center;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex: 1;

    ${largeUp} {
      &:hover {
        .card { border: 0; }
      }
    }
  }

  .bottom-legal {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 800px;
    margin-top: 24px;
    margin-bottom: 24px;

    p {
      color: grey;
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 12px;
    }
  }
`

const Plans = () => (
  <StyledPlans className="container">
    <h2>
      Brüner's Best Plans:
    </h2>
    <div className="card-container">
      <Card cardName="PAMANTHA" dollars="30" cents="00" legal="$5/mo after we’re best friends" />
      <Card cardName="TEGRIDY FARM" dollars="50" cents="00" legal="$700/mo after you’re officially rich"/>
      <Card cardName="PC PRINCIPAL" dollars="70" cents="00" legal="$11/mo after you’ve proven worthy"/>
      <Card cardName="SAFE SPACE" dollars="100" cents="00" legal="-$1/mo after you demonstrate loyalty"/>
    </div>
    <div className="bottom-legal">
    <p>
    *Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill.
    </p>
    <p>
    **Ralph can’t come on Tuesday nights. Bowling league.
    </p>
    <p>
    †Badminton match must be within a 45 mile radius of Ogden, UT.
    </p>
    </div>
  </StyledPlans>
)

export default Plans;