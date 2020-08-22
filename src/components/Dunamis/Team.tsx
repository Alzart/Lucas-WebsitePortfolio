import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Team() {
  const data = useStaticQuery(graphql`
    query {
      amelie: file(relativePath: { eq: "01_Dunamis/Team/Amélie.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hugues: file(relativePath: { eq: "01_Dunamis/Team/Hugues.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lucas: file(relativePath: { eq: "01_Dunamis/Team/Lucas.png" }) {
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
      <SectionHead>Team</SectionHead>
      <Wrapper>
        <Portait>
          <Img
            fluid={data.amelie.childImageSharp.fluid}
            style={{
              width: "400px",
              height: "400px",
              margin: "auto",
            }}
          />
          <h5>Lead Design</h5>
          <p>Amélie Blondeaux</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.hugues.childImageSharp.fluid}
            style={{
              width: "400px",
              height: "400px",
              margin: "auto",
            }}
          />
          <h5>Narrative & Game Design</h5>
          <p>Hugues Tourneur</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.lucas.childImageSharp.fluid}
            style={{
              width: "400px",
              height: "400px",
              margin: "auto",
            }}
          />
          <h5>Narrative & Art</h5>
          <p>Lucas de Pinho</p>
        </Portait>
      </Wrapper>
    </>
  )
}
export default Team

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
