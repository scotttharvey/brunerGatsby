import React from "react"
import styled from "@emotion/styled"
import { mediumDown } from "./mediaQuery"

const StyledTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 0;
  min-width: 350px;
  max-width: 380px;
  box-shadow: 2px 2px 4px 1px rgb(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out 0s;

  ${mediumDown} {
    margin-bottom: 24px;
  }

  p {
    margin: 0;
  }

  .title-container {
    padding: 12px;
    background-color: #009fe3;
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .title {
    color: white;
    margin-bottom: 2px;
    text-align: center;
    width: 100%;
  }

  .copy-container {
    padding: 24px;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

  }

  &:hover {
    transform: scale(1.005);
    box-shadow: 1px 1px 4px 1px rgb(0, 0, 0, 0.2);

    }
`


const TitleCard = ({cardName = "Default", copy = "No Copy Given"}) => (
  <StyledTitleCard>
    <div className="title-container">
      <h3 className="title">{cardName}</h3>
    </div>

    <div className="copy-container">
      <p>{copy}</p>
    </div>

  </StyledTitleCard>
)

export default TitleCard;