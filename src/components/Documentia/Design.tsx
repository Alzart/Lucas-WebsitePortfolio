import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Design() {
  const data = useStaticQuery(graphql`
    query {
      fullField: file(
        relativePath: { eq: "02_Documentia/Process/fullField.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delete: file(relativePath: { eq: "02_Documentia/Process/Delete.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      files: file(relativePath: { eq: "02_Documentia/Process/Folder.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emptyField: file(
        relativePath: { eq: "02_Documentia/Process/emptyField.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      farmer: file(
        relativePath: { eq: "02_Documentia/Intro/DocumentiaBrand_hide.png" }
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
      <SectionHead>Design</SectionHead>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <Frame>
            <Img
              fluid={data.fullField.childImageSharp.fluid}
              style={{
                width: "350px",
                height: "200px",
                margin: "auto",
              }}
            />
            <br />
            <p>Visit Documentia and meet its people</p>
          </Frame>
          <Frame>
            <Img
              fluid={data.delete.childImageSharp.fluid}
              style={{
                width: "350px",
                height: "200px",
                margin: "auto",
              }}
            />
            <br />
            <p>The game asks you to delete stuff in your computer</p>
          </Frame>
        </div>
        <Img
          fluid={data.files.childImageSharp.fluid}
          style={{
            width: "600px",
            height: "450px",
            margin: "auto",
          }}
        />
        <br />
        <p>But you have to delete villagers and their goods...</p>
        <div style={{ display: "flex" }}>
          <Frame>
            <Img
              fluid={data.emptyField.childImageSharp.fluid}
              style={{
                width: "350px",
                height: "200px",
                margin: "auto",
              }}
            />
            <br />
            <p>Which have an impact on the game...</p>
          </Frame>
          <Frame>
            <Img
              fluid={data.farmer.childImageSharp.fluid}
              style={{
                width: "350px",
                height: "200px",
                margin: "auto",
              }}
            />
            <br />
            <p>... and people!</p>
          </Frame>
        </div>
        <p>The player’s aim is to get clues from villagers to save them !</p>
      </Wrapper>
    </>
  )
}
export default Design

const Wrapper = styled.div`
  margin: 5vh auto;
  p {
    margin: auto;
    width: 362px;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`
const Frame = styled.div`
  position: relative;
  padding: 2vh;
  margin: 3vh auto;
  text-align: center;
  background-color: #000;
  p {
    font-family: Manjari;
    font-size: 24px;
    color: #fff;
  }
`
