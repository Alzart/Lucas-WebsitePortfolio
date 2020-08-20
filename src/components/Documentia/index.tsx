import React from "react"
import Intro from "./Intro"
import IntroVideo from "./IntroVideo"
import Team from "./Team"
import Vision from "./Vision"
import styled from "styled-components"
import Design from "./Design"
import Art from "./Art"
import Conclusion from "./Conclusion"

function Documentia() {
  const onClickScrollDown = () => {
    window.scrollTo({
      top: (window.innerHeight * 75) / 100,
      left: 0,
      behavior: "smooth",
    })
  }
  const onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="37"
          height="50"
          viewBox="0 0 37 24"
          style={{ cursor: "pointer" }}
          onClick={onClickScrollDown}
        >
          <path
            d="M18.285 24L23.613 18.6882L23.5979 18.6731L37 5.3118L31.6774 -4.33377e-06L18.2466 13.3835L5.31612 0.469549L-2.52712e-07 5.78134L12.9365 18.6731L12.9354 18.6774L18.2645 23.9892L18.2688 23.9849L18.285 24Z"
            fill="black"
          />
        </svg>
      </div>
      <Intro />
      <IntroVideo />
      <Team />
      <Vision />
      <Design />
      <Art />
      <Conclusion />
      <div style={{ display: "flex", margin: "5vh auto" }}>
        <p
          style={{
            textTransform: "uppercase",
            margin: "auto",
            fontFamily: "Raleway",
            fontSize: "30px",
            cursor: "pointer",
            color: "#000",
          }}
          onClick={onClickScrollUp}
        >
          Back To Top
        </p>
      </div>
    </div>
  )
}
export default Documentia

export const SectionHead = styled.p`
  position: relative;
  width: 190px;
  left: 130px;
  padding: 15px;
  background-color: #000;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`
