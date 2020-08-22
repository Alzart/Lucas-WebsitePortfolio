import React from "react"
import styled from "styled-components"

function Video() {
  return (
    <Wrapper>
      <iframe
        className="embededvideo"
        title="youtube player"
        src="https://www.youtube.com/embed/sMTsgmCHWT0"
        style={{ width: "70vw", height: "40vw" }}
      />
    </Wrapper>
  )
}
export default Video
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
