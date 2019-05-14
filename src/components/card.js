import React, { Component } from "react"
import styled from "@emotion/styled"
import Icon from "../images/money.svg"
import { small, mediumDown, largeUp } from "./mediaQuery"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-width: 275px;
  max-width: 280px;
  flex: 1;
  transition: 0.3s ease-in-out 0s;
  cursor: default;
  position: relative;

  ${largeUp} {
    border-right: 1px solid lightgrey;
    &:last-child {
      border-right: 0;
    }
  }

  ${mediumDown} {
    border-right: 0;
    box-shadow: 1px 1px 4px 1px rgb(0, 0, 0, 0.2);
    margin-bottom: 24px;

    &:nth-child(2n) {
      margin-left: 12px;
      margin-right: 12px;
    }
  }

  ${small} {
    min-width: 300px;
    max-width: 350px;

    &:nth-child(2n) {

      margin-left: 0;
      margin-right: 0;
    }
  }

  .see-more {
    position: absolute;
    right: 24px;

    span {
      cursor: pointer;
      color: black;
    }
  }

  &:hover {

    transform: scale(1.005);
    box-shadow: 1px 1px 4px 1px rgb(0, 0, 0, 0.2);

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
      /* font-size: 16px; */
      }
    }

    .feature-block {
      ${ small } {
        display: none;

        &.active {
          display: flex;
        }
      }
    }

  .cardBtn {
    padding: 8px;
    background-color: #009fe3;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    color: #009fe3;
    margin-bottom: 12px;
  }

  .price {
    position: relative;
    display: flex;
    justify-content: start;

    p {
      margin-bottom: 0;
    }

    .dollars {
      font-size: 32px;
    }

    .cents {
      margin-top: -4px;
      font-size: 16px;
    }

    .duration {
      font-size: 18px;
      margin-top: 4px;
    }
  }

  .legal {
    font-size: 10px;
    margin-bottom: 8px;
  }
`

const FeatureBlock = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #009fe3;
  padding-top: 18px;

  .feature {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  .feature-title {
    font-size: 18px;
  }

  .description {
    font-size: 10px;
    margin-top: -8px;
  }

  .before-icon {
    position: relative;
    padding-left: 25px;

    &::before {
      position: absolute;
      top: 6px;
      left: 0;
      width: 18px;
      height: 18px;
      background-image: url(${Icon});
      background-repeat: no-repeat;
      background-size: contain;
      content: '';

    }

    &.money {
      &::before {
        background-image: url(${Icon});
      }
    }
  }

`

class Card extends Component {

  state = {
    cardActive: false,
  }

  toggleActive = () => {
    this.setState({
      cardActive: !this.state.cardActive,
    })
  }

  render() {
    let cardActive = this.state.cardActive
    return (
      <StyledCard>
        <div className="show-for-small see-more" onClick={this.toggleActive}>
          <span className="show-for-small link">See {cardActive ? "Less" : "More"}</span>
        </div>
        <PriceBlock>
          <p className="title">{this.props.cardName}</p>
          <div className="price">
            <p className="dollars">{this.props.dollars}</p>
            <p className="cents">{this.props.cents}</p>
            <p className="duration">/mo</p>
          </div>
          <p className="legal">{this.props.legal}</p>
        </PriceBlock>
        <FeatureBlock className={cardActive ? "feature-block active" : "feature-block"}>
          <div className="feature before-icon money">
            <span className="feature-title">Free Change Service</span>
            <span className="description">Need to break a $20? We can help.</span>
          </div>
          <div className="feature before-icon money">
            <span className="feature-title">Free Change Service</span>
            <span className="description">Need to break a $20? We can help.</span>
          </div>
          <div className="feature before-icon money">
            <span className="feature-title">Free Change Service</span>
            <span className="description">Need to break a $20? We can help.</span>
          </div>
        </FeatureBlock>
          <button className="cardBtn">
            ORDER {this.props.cardName} <br/>
            <strong>
              1.888.888.888
            </strong>
          </button>
      </StyledCard>
    )
  }
}
export default Card;