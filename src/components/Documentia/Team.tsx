import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Team() {
  const data = useStaticQuery(graphql`
    query {
      lucas: file(relativePath: { eq: "02_Documentia/Team/Luka.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leo: file(relativePath: { eq: "02_Documentia/Team/Leo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      corentin: file(relativePath: { eq: "02_Documentia/Team/Coco.png" }) {
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
            fluid={data.leo.childImageSharp.fluid}
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
            }}
          />
          <h5>Design & Code</h5>
          <p>Léo Marrambat-Patinote</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.lucas.childImageSharp.fluid}
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
            }}
          />
          <h5>Design & Art</h5>
          <p>Lucas De Pinho</p>
        </Portait>
        <Portait>
          <Img
            fluid={data.corentin.childImageSharp.fluid}
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
            }}
          />
          <h5>Sound & Music</h5>
          <p>Corentin Castric</p>
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
