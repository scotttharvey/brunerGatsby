/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core'
import { small, mediumDown } from "./mediaQuery"

import Header from "./header"
import Plans from "./plans"
import SideBySide from "./sideBySide"
import PayUs from "./payUsMore"
import Cta from "./cta"
import Equipment from "./equipment"
import Faq from "./faqs"
import Footer from "./footer"

import satellite from "../images/satellite.png"
import brunerDevices from "../images/bruner-devices.png"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Global
          styles={css`
            * {
            font-family: monospace;
            cursor: default;
            }

            .container {
              max-width: 1200px;
              margin: auto;
              padding-top: 76px;
              padding-bottom: 76px;
              padding-right: 24px;
              padding-left: 24px;

              ${small} {
                padding-top: 36px;
                padding-bottom: 36px;
              }
            }

            h2, h3 {
              font-weight: 300;
            }

            button {
              cursor: pointer;
              color: white;

              &:disabled {
                background-color: grey !important;
              }

              &:hover {
                background-color: olive;
              }
            }

            a, .link {
              position: relative;
              color: white;
              cursor: pointer;
              text-decoration: none;

              &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: rgb(250, 68, 114);
                visibility: hidden;
                transform: scaleX(0);
                transition: .2s ease-in-out 0s;

              }

              &:hover {
                text-decoration: none;

                &::before {
                  visibility: visible;
                  transform: scaleX(1);
                }
              }
            }

            .no-margin { margin: 0; }

            .flex {
              display: flex;
            }

            .show-for-medium-down {
              display: none;
              ${mediumDown} {
                display: block;
                visibility: visible;
              }
            }

            .hide-for-medium-down {
              ${mediumDown} {
                display: none;
                visibility: hidden;
              }
            }

            .hide-for-small {
              ${small} {
                display: none;
              }
            }

            .show-for-small {
              display: none;

              ${small} {
                display: block;
              }
            }
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Plans />
        <SideBySide bg="#eee" title="We’re Here to Brand Everything, Everywhere, Anytime" img={brunerDevices} copy="Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments." />
        <PayUs />
        <Cta />
        <SideBySide title="What is a Brüner?" img={satellite} copy="You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general." brunerFeatures={true} />
        <Equipment />
        <Faq />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
