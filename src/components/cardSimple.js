import React from "react"
import styled from "@emotion/styled"
import { mediumDown} from "./mediaQuery"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 260px;
  margin-top: 0;
  padding: 14px;
  padding-top: 0;
  padding-bottom: 0;
  transition: 0.3s ease-in-out 0s;
  border-left: 2px solid #009fe3;

  ${mediumDown} {
    min-height: auto;
    margin-bottom: 24px;
    border-left: 0;
  }

  p {
    margin: 0;
  }

  .title {
    color: #009fe3;
    margin-bottom: 2px;

    ${mediumDown} {
      padding-bottom: 12px;
      margin-bottom: 12px;
      border-bottom: 2px solid #009fe3;
    }
  }

  &:hover {

    transform: scale(1.005);
    border-color: rgb(0, 191, 151);

    .title {
      transition: 0.3s ease-in-out 0s;
      color: rgb(0, 191, 151);

    }

    .feature-block {
      border-top: 1px solid rgb(0, 191, 151);
    }

    button {
      transition: 0.3s ease-in-out 0s;
      background-color: rgb(0, 191, 151);
      font-size: 18px;
      }
    }
`


const CardSimple = ({cardName = "Default", copy = "No Copy Given"}) => (
  <StyledCard className="container">
    <h3 className="title">
      {cardName}
    </h3>
    <p>{copy}</p>

  </StyledCard>
)

export default CardSimple;