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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ameublement: file(
        relativePath: { eq: "03_Sodexo/Design/Ameublement.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maya: file(relativePath: { eq: "03_Sodexo/Design/3D/Maya.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blender: file(
        relativePath: { eq: "03_Sodexo/Design/3D/Render+Exterior_04.png" }
      ) {
        childImageSharp {
          fluid {
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
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Item>
            <Img
              fluid={data.maya.childImageSharp.fluid}
              style={{
                width: "25vw",
              }}
            />
            <br />
            <p>Maya</p>
          </Item>
          <Item>
            <Img
              fluid={data.blender.childImageSharp.fluid}
              style={{
                width: "25vw",
              }}
            />
            <br />
            <p>Blender</p>
          </Item>
        </div>
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
