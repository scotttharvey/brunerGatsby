import React from "react"
import styled from "@emotion/styled"
import Plus from "../images/plusIcon.png"
import Min from "../images/minus.svg"
import { small } from "./mediaQuery"

const StyledAccordian = styled.div`
  display: flex;
  flex-direction: column;

  .question {
    position: relative;
    font-size: 24px;
    color: white;
    padding: 12px;
    padding-right: 30px;
    cursor: pointer;
    background-color: #009fe3;
    margin-top: 18px;

    ${small} {
      font-size: 18px;
    }

    &::before {
      content: "";
      transition: .2s ease-in-out .1s;
      transform: rotate(-180deg);
      position: absolute;
      right: 12px;
      width: 20px;
      height: 20px;
      background-image: url(${Plus});
      background-repeat: no-repeat;
    }

    &.open {
      &::before {
        transition: .2s ease-in-out .1s;
        transform: rotate(0deg);
        background-image: url(${Min});
        background-repeat: repeat-y;
      }
    }

    p {
      margin: 0;
    }
  }

  .answer {
    display: none;
    visibility: hidden;
    font-size: 18px;
    background-color: #eee;
    padding: 24px;

    ${small} {
      font-size: 16px;
    }
  }

  .visible {
    display: block;
    visibility: visible;
  }
`

const Accordian = ({q, a}) => (
  <StyledAccordian>
    <div className="question" onClick={(e)=>{
      if(e.currentTarget.nextSibling.classList.contains('visible')) {
        e.currentTarget.classList.remove("open")
        e.currentTarget.nextSibling.classList.remove('visible')
      } else {
        e.currentTarget.classList.add("open")
        e.currentTarget.nextSibling.classList.add('visible')
      }
    }}>
      <p>{q}</p>
    </div>
    <div className="answer">
      <p>{a}</p>
    </div>
  </StyledAccordian>
)

export default Accordian;