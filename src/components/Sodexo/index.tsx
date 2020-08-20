import React from "react"
import styled from "styled-components"
import Context from "./Context"
import Collaboration from "./Collaboration"
import Design from "./Design"
import UserScenario from "./UserScenario"
import Concepts from "./Concepts"

function Sodexo() {
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
        >
          <path
            d="M18.285 24L23.613 18.6882L23.5979 18.6731L37 5.3118L31.6774 -4.33377e-06L18.2466 13.3835L5.31612 0.469549L-2.52712e-07 5.78134L12.9365 18.6731L12.9354 18.6774L18.2645 23.9892L18.2688 23.9849L18.285 24Z"
            fill="black"
          />
        </svg>
      </div>
      <Context />
      <Collaboration />
      <Design />
      <UserScenario />
      <Concepts />
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
        >
          Back To Top
        </p>
      </div>
    </div>
  )
}
export default Sodexo

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
export const SectionSubHead = ({ children }: any) => {
  return (
    <SubHead>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="17" height="17" fill="black" />
      </svg>
      <p>{children}</p>
    </SubHead>
  )
}
const SubHead = styled.p`
  position: relative;
  left: 130px;
  padding: 3vh;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
  color: #000;
  display: flex;
  svg {
    margin: auto 0;
  }
  p {
    margin: auto 0;
    margin-left: 20px;
  }
`
