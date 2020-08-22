import React from "react"
import styled from "styled-components"
import Context from "./Context"
import Intro from "./Intro"
import Team from "./Team"
import Postures from "./Postures"
import StoryBoard from "./StoryBoard"
import MiniGames from "./MiniGames"
import Art from "./Art"
import Mockups from "./MockUps"
import Video from "./Video"

function Dunamis() {
  const isBrowser = typeof window !== "undefined"
  const onClickScrollDown = () => {
    if (isBrowser) {
      window.scrollTo({
        top: (window.innerHeight * 75) / 100,
        left: 0,
        behavior: "smooth",
      })
    }
  }
  const onClickScrollUp = () => {
    if (isBrowser) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }
  }
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <GoDown>
        <svg
          onClick={onClickScrollDown}
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
      </GoDown>
      <Context />
      <Intro />
      <Video />
      <Team />
      <Postures />
      <StoryBoard />
      <MiniGames />
      <Art />
      <Mockups />
      <BackToTop>
        <p onClick={onClickScrollUp}>Back To Top</p>
      </BackToTop>
    </div>
  )
}
export default Dunamis

export const SectionHead = styled.div`
  position: relative;
  width: 190px;
  left: 5vw;
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
const SubHead = styled.div`
  position: relative;
  left: 5vw;
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
const BackToTop = styled.div`
  display: flex;
  margin: 5vh auto;
  p {
    text-transform: uppercase;
    margin: auto;
    font-family: Raleway;
    font-size: 30px;
    transition: 0.3s all;
    cursor: pointer;
    color: #000;
    :hover {
      font-size: 40px;
    }
  }
`
const GoDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: 0.3s all;
    :hover {
      transform: scale(1.5);
    }
  }
`
