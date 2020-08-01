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
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Intro />
      <IntroVideo />
      <Team />
      <Vision />
      <Design />
      <Art />
      <Conclusion />
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
