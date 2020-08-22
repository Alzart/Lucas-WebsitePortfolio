import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function Team() {
  const data = useStaticQuery(graphql`
    query {
      post1: file(relativePath: { eq: "01_Dunamis/postures/Postures_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      post2: file(relativePath: { eq: "01_Dunamis/postures/Postures_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      post3: file(relativePath: { eq: "01_Dunamis/postures/Postures_03.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      game1: file(relativePath: { eq: "01_Dunamis/GD/Mini_Games_01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      game2: file(relativePath: { eq: "01_Dunamis/GD/Mini_Games_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      game3: file(relativePath: { eq: "01_Dunamis/GD/Mini_Games_03.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      game4: file(relativePath: { eq: "01_Dunamis/GD/Mini_Games_04.png" }) {
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
      <SectionSubHead>Mini-Games</SectionSubHead>
      <Wrapper>
        <Items>
          <Img
            fluid={data.game1.childImageSharp.fluid}
            style={{
              width: "250px",
              margin: "auto",
            }}
          />
          <Img
            fluid={data.post1.childImageSharp.fluid}
            style={{
              width: "100px",
              height: "150px",
              margin: "2vh auto",
            }}
          />
          <p>Flexion-Extenstion</p>
        </Items>
        <Items>
          <Img
            fluid={data.game2.childImageSharp.fluid}
            style={{
              width: "250px",
              margin: "auto",
            }}
          />
          <Img
            fluid={data.post3.childImageSharp.fluid}
            style={{
              width: "100px",
              height: "150px",
              margin: "2vh auto",
            }}
          />
          <p>Torso Rotation</p>
        </Items>
        <Items>
          <Img
            fluid={data.game3.childImageSharp.fluid}
            style={{
              width: "250px",
              margin: "auto",
            }}
          />
          <Img
            fluid={data.post2.childImageSharp.fluid}
            style={{
              width: "100px",
              height: "150px",
              margin: "2vh auto",
            }}
          />
          <p>Latero-Flexion</p>
        </Items>
        <Items>
          <Img
            fluid={data.game4.childImageSharp.fluid}
            style={{
              width: "250px",
              margin: "auto",
            }}
          />
          <Img
            fluid={data.post1.childImageSharp.fluid}
            style={{
              width: "100px",
              height: "150px",
              margin: "2vh auto",
            }}
          />
          <p>Flexion-Extenstion</p>
        </Items>
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

const Items = styled.div`
  position: relative;
  color: #000;
  margin: auto;
  text-align: center;
  border: 5px solid #000;
  p {
    font-family: Manjari;
    font-size: 24px;
  }
`
