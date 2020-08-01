import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function IntroVideo() {
  return (
    <Wrapper>
      <iframe
        className="embededvideo"
        title="youtube player"
        src="https://www.youtube.com/embed/WLZX8gPBHpc"
        style={{ width: "900px", height: "500px" }}
      />
      <br />
      <p>
        You can play the game for free{" "}
        <span
          onClick={() => window.open("https://pandanym.itch.io/documentia")}
        >
          here
        </span>
        .
      </p>
    </Wrapper>
  )
}
export default IntroVideo
const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  p {
    font-family: Manjari;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    span {
      color: #000000;
      text-decoration: none;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`
