import React from "react"
import styled from "styled-components"

function IntroVideo() {
  return (
    <Wrapper>
      <iframe
        className="embededvideo"
        title="youtube player"
        src="https://www.youtube.com/embed/WLZX8gPBHpc"
        style={{ width: "70vw", height: "40vw" }}
      />
      <br />
      <p>
        You can play the game for free{" "}
        <span
          onClick={() => window.open("https://pandanym.itch.io/documentia")}
        >
          here
        </span>
      </p>
    </Wrapper>
  )
}
export default IntroVideo
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 5vh auto;

  p {
    font-family: Manjari;
    font-size: 24px;
    color: #000;
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
