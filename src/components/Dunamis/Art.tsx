import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"
function Context() {
  const data = useStaticQuery(graphql`
    query {
      props: file(relativePath: { eq: "01_Dunamis/Concepts/WireFrame20.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props2: file(
        relativePath: { eq: "01_Dunamis/Concepts/WireFrame19.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chars: file(relativePath: { eq: "01_Dunamis/Concepts/WireFrame17.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chars2: file(
        relativePath: { eq: "01_Dunamis/Concepts/WireFrame18.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chars3: file(relativePath: { eq: "01_Dunamis/Concepts/Charaters.jpg" }) {
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
      <SectionHead>Art</SectionHead>
      <Wrapper>
        <Img
          fluid={data.props.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <Img
          fluid={data.chars.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <Img
          fluid={data.chars2.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <Img
          fluid={data.chars3.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <Img
          fluid={data.props2.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Context
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 80%;
  flex-direction: column;
  color: #000;
`
