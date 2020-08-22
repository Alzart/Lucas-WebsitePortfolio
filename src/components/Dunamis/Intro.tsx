import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Intro() {
  const data = useStaticQuery(graphql`
    query {
      belt: file(relativePath: { eq: "01_Dunamis/Context/Atlas_Belt.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tablet: file(relativePath: { eq: "01_Dunamis/Context/Tablette.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Section>
        <h3>Atlas</h3>
        <Img
          fluid={data.belt.childImageSharp.fluid}
          style={{
            width: "382px",
            height: "276px",
            margin: "auto",
          }}
        />
        <h4>The Belt</h4>
      </Section>
      <Section>
        <p>Two products in one.</p>
        <svg
          width="65"
          height="98"
          viewBox="0 0 65 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.9543 49.3072L50.6373 35.2699L50.5967 35.3097L14.5836 0L0.2666 14.0231L36.3395 49.4085L1.53225 83.4756L15.8492 97.4817L50.5967 63.3987L50.6083 63.4015L64.9253 49.3613L64.9137 49.3499L64.9543 49.3072Z"
            fill="black"
          />
        </svg>
        <p>is the controller of</p>
      </Section>
      <Section>
        <h3>Dunamis</h3>
        <Img
          fluid={data.tablet.childImageSharp.fluid}
          style={{
            width: "382px",
            height: "276px",
            margin: "auto",
          }}
        />
        <h4>The Game</h4>
      </Section>
    </Wrapper>
  )
}
export default Intro

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 700px;
  padding: 0 10vh;
  margin: 5vh auto;
`

const Section = styled.div`
  position: relative;
  color: #000;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;

  svg {
    margin: auto;
    height: 276px;
  }
  p {
    margin: auto;
    font-family: Manjari;
    font-size: 24px;
  }
  h3 {
    margin: auto;
    font-family: Raleway;
    font-size: 64px;
    text-transform: uppercase;
  }
  h4 {
    width: 300px;
    margin: auto;
    padding: 15px;
    background-color: #000;
    text-transform: uppercase;
    font-family: Raleway;
    font-size: 48px;
    text-align: center;
    color: #ffffff;
  }
`
