import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function Context() {
  const data = useStaticQuery(graphql`
    query {
      enviro: file(
        relativePath: { eq: "01_Dunamis/Maquettes/Fun_02_Enviro.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props: file(
        relativePath: { eq: "01_Dunamis/Maquettes/lvl_01_early.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props2: file(relativePath: { eq: "01_Dunamis/Maquettes/Style_02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props3: file(relativePath: { eq: "01_Dunamis/Maquettes/Geometric.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props4: file(
        relativePath: { eq: "01_Dunamis/Maquettes/Foret_Gentille_V01.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props5: file(
        relativePath: { eq: "01_Dunamis/Maquettes/StyleLucas.png" }
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
      <SectionSubHead>Mock-Ups</SectionSubHead>
      <Wrapper>
        <Img
          fluid={data.enviro.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.props.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
          <Img
            fluid={data.props2.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.props3.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
          <Img
            fluid={data.props4.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
        </div>
        <Img
          fluid={data.props5.childImageSharp.fluid}
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
