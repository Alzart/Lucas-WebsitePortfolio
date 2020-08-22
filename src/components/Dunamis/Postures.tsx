import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead, SectionSubHead } from "./index"

function Postures() {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "01_Dunamis/postures/Postures_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "01_Dunamis/postures/Postures_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "01_Dunamis/postures/Postures_03.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionHead>Design</SectionHead>
      <SectionSubHead>Physical Reeductation</SectionSubHead>
      <Wrapper>
        <Portait>
          <Img
            fluid={data.one.childImageSharp.fluid}
            style={{
              width: "260px",
              height: "380px",
              margin: "auto",
            }}
          />
          <br />
          <p>Flexion-Extenstion</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.two.childImageSharp.fluid}
            style={{
              width: "260px",
              height: "380px",
              margin: "auto",
            }}
          />
          <br />
          <p>Latero-Flexio</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.three.childImageSharp.fluid}
            style={{
              width: "260px",
              height: "380px",
              margin: "auto",
            }}
          />
          <br />
          <p>Torso Rotation</p>
        </Portait>
      </Wrapper>
    </>
  )
}
export default Postures
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 5vh auto;
`

const Portait = styled.div`
  position: relative;
  color: #000;
  margin: auto;
  text-align: center;
  p {
    font-family: Manjari;
    font-size: 24px;
  }
  h5 {
    display: inline-block;
    text-transform: uppercase;
    font-size: 44px;
    font-family: Raleway;
  }
`
