import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Conclusion() {
  const data = useStaticQuery(graphql`
    query {
      awards: file(relativePath: { eq: "02_Documentia/End/Awards.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ludum: file(relativePath: { eq: "02_Documentia/End/Ludum.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tent: file(relativePath: { eq: "02_Documentia/End/Tent.png" }) {
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
      <SectionHead>Conclusion</SectionHead>
      <Wrapper>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: "5vh auto",
          }}
        >
          <iframe
            className="embededvideo"
            title="youtube player"
            src="https://www.youtube.com/embed/AQkN61dqjeY?start=8049"
            style={{ width: "70vw", height: "40vw" }}
          />
        </div>
        <p>The game have been played more than 400 times.</p>
        <p>We got enough feedbacks and insights to correct bugs and errors.</p>
        <p>We finally reached the 4th place of the LUDUM DARE 43.</p>
        <br />
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.awards.childImageSharp.fluid}
            style={{
              width: "375px",
              height: "270px",
              margin: "auto",
            }}
          />
          <Img
            fluid={data.ludum.childImageSharp.fluid}
            style={{
              width: "510px",
              height: "270px",
              margin: "auto",
            }}
          />
        </div>
        <Img
          fluid={data.tent.childImageSharp.fluid}
          style={{
            width: "290px",
            height: "270px",
            margin: "auto",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Conclusion

const Wrapper = styled.div`
  margin: 5vh auto;
  p {
    margin: auto;
    text-align: center;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`
