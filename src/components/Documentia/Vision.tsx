import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Vision() {
  const data = useStaticQuery(graphql`
    query {
      kill: file(relativePath: { eq: "02_Documentia/Vision/Kill.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      regret: file(
        relativePath: { eq: "02_Documentia/Vision/WhatHaveIDone.png" }
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
      <SectionHead>Vision</SectionHead>
      <Wrapper>
        <p>In games and for people, killing stuff is</p>
        <h5>COOL!</h5>
        <Img
          fluid={data.kill.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "auto",
          }}
        />
        <br />
        <p>We want people to feel the opposite :</p>
        <h5>GUILT.</h5>
        <Img
          fluid={data.regret.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "auto",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Vision

const Wrapper = styled.div`
  color: #000;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5vh auto;
  p {
    font-family: Manjari;
    font-size: 24px;
  }
  h5 {
    font-family: Raleway;
    font-size: 48px;
  }
`
