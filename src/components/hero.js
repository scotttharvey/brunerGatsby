import React from "react"
import styled from "@emotion/styled"

const StyledHero = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 1.45rem;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 24px;
  padding-right: 24px;
  color: white;
  text-align: center;

  .hero-title {
    font-size: 60px;
    font-weight: 300;
  }
`

const InputContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;

  * {
      height: 100%;
      margin: 0;
      border: 0;
  }

  input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding-left: 18px;
    padding-right: 18px;
  }

  button {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #009fe3;
    padding-left: 28px;
    padding-right: 28px;

    &:hover {
      background-color: rgb(0, 191, 151);
    }
  }
`

const Hero = () => (
    <StyledHero>
        <h1 className="hero-title">Discover Brüner Satellite
          <br/>
        Internet Bundles</h1>
        <p>Jimmy B is here to make the world a better place, one connection at a time. </p>
        <InputContainer>
            <input className="zip" placeholder="Enter Zip" maxLength="5" onChange={(e)=>{
              if(/\D/g.test(e.currentTarget.value)) {
                e.currentTarget.style.color = 'tomato'
              } else {
                e.currentTarget.style.color = 'black'
              }

            }}/>
            <button id="btn" className="flex" >
            <span className="show-for-small">See Plans!</span>
            <span className="hide-for-small">Connect with the Brüner</span>
            </button>
        </InputContainer>
    </StyledHero>
)

export default Hero;