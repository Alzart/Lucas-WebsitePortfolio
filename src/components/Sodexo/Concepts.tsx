import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function Concepts() {
  const data = useStaticQuery(graphql`
    query {
      sketches: file(relativePath: { eq: "03_Sodexo/Design/Sketches.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ameublement: file(
        relativePath: { eq: "03_Sodexo/Design/Ameublement.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test1: file(relativePath: { eq: "03_Sodexo/Design/Test_II_b.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test2: file(relativePath: { eq: "03_Sodexo/Design/Test_III.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test3: file(relativePath: { eq: "03_Sodexo/Design/Test_X.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      all: file(
        relativePath: { eq: "03_Sodexo/Design/3D/AllPropositions.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blender1: file(
        relativePath: { eq: "03_Sodexo/Design/3D/Render+Exterior_02.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blender2: file(
        relativePath: { eq: "03_Sodexo/Design/3D/Render+Exterior_02.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blender3: file(
        relativePath: { eq: "03_Sodexo/Design/3D/Frigo_COLORS2.png" }
      ) {
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
      <SectionSubHead>Concepts</SectionSubHead>
      <Wrapper>
        <Img
          fluid={data.sketches.childImageSharp.fluid}
          style={{
            width: "80%",
            margin: "auto",
          }}
        />
        <Img
          fluid={data.ameublement.childImageSharp.fluid}
          style={{
            width: "80%",
            margin: "auto",
          }}
        />
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.test1.childImageSharp.fluid}
            style={{
              width: "32.3%",
              margin: "1%",
            }}
          />
          <Img
            fluid={data.test2.childImageSharp.fluid}
            style={{
              width: "32.3%",
              margin: "1%",
            }}
          />
          <Img
            fluid={data.test3.childImageSharp.fluid}
            style={{
              width: "32.3%",
              margin: "1%",
            }}
          />
        </div>
        <Img
          fluid={data.all.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "2vh auto",
          }}
        />
        <br />
        <p>Blender 2.8 // Cycles</p>
        <br />
        <Img
          fluid={data.blender1.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "2vh auto",
          }}
        />
        <Img
          fluid={data.blender2.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "2vh auto",
          }}
        />
        <Img
          fluid={data.blender3.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "2vh auto",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Concepts
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 80%;
  flex-direction: column;
  color: #000;
  p {
    margin: auto;
    text-align: center;
    font-family: Manjari;
    width: 80%;
    font-size: 24px;
    line-height: 28px;
  }
`
const Item = styled.div`
  position: relative;
  color: #000;
  margin: auto;
  text-align: center;
  p {
    font-family: Manjari;
    font-size: 24px;
  }
`
