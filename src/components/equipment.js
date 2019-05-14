import React from "react"
import styled from "@emotion/styled"

import TitleCard from "./titleCard"

const StyledEquipment = styled.div`
  max-width: 900px;

  .top {
    max-width: 700px;
    margin: auto;
  }

  h2 {
    text-align: center;
  }

  .center { text-align: center; }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }

  .space-around {
    display: flex;
    justify-content: space-around;
  }

`

const Equipment = () => (
  <section style={{
    backgroundColor: '#eee'
  }}>
  <StyledEquipment className="container">
    <div className="top">
      <h2>
      Equipment
      </h2>
      <p className="center">When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>
    </div>
    <div className="space-around">
      <TitleCard cardName="Brüner Satellite Dish" copy="To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner." />
      <TitleCard cardName="Brüner Wi-Fi Modem" copy="The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. " />
    </div>
  </StyledEquipment>
  </section>
)

export default Equipment;