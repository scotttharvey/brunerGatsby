import React from "react"
import styled from "@emotion/styled"

const StyledCta = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 175px;
  background-color: #009fe3;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top:-15px;
    width: 30px;
    height: 30px;
    background-color: #009fe3;
    transform: rotate(45deg);
  }

  h3 {
    color: white;
  }

  button {
    padding:12px;
    padding-right: 24px;
    padding-left: 24px;
    background-color: white;
    color: #009fe3;
    border-radius: 6px;
    box-shadow: 1px 1px 2px 2px rgb(0, 0, 0, 0.2);

  }


`


const Cta = () => (
  <StyledCta>
    <h3>Get Connected With Brüner Dynamics Today. </h3>
    <button>
      Call 1.888.888.8888
    </button>

  </StyledCta>
)

export default Cta;