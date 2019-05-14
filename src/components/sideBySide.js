import React from "react"
import styled from "@emotion/styled"
import { small, largeUp } from "./mediaQuery"

const StyledSideBySide = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: auto;

${largeUp} {
  flex-direction: row;
}



.content {
  display: flex;
  flex-direction: column;
}

.bg {
  background-color: 'white';
}

  div {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    flex: 1;

    img {
      max-height: 400px;
      padding: 50px;

      ${small} {
        max-height: 300px;
        padding: 24px;
      }
    }
  }

`

const SideBySide = ({title, img, copy, brunerFeatures = false, bg = "white", }) => (
  <section style={{
    backgroundColor: bg
  }}>
    <StyledSideBySide className="container">
      <div>
        <img src={img} alt="side by side" />
      </div>
      <div className="content">
        <h2>
          {title}
        </h2>
        <p>
          {copy}
        </p>

        {brunerFeatures
        ? (
          <>
          <p>Brüner Dynamics is on course to change the world:
          </p>
          <ul>
            <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day.</li>
            <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
          </ul>
          </>
        )
        : ""
        }

      </div>
    </StyledSideBySide>
  </section>
)

export default SideBySide;