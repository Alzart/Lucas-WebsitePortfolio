import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"

export interface Props {
  selected: string
}
const Header = ({ selected }: Props) => (
  <Wrapper>
    <Category
      selected={selected === "/" ? true : false}
      onClick={() => navigate("/")}
    >
      <p>Projects</p>
    </Category>
    <Category
      selected={selected === "/about" || selected === "/about/" ? true : false}
      onClick={() => navigate("/about")}
    >
      <p>About</p>
    </Category>
    <Category
      selected={
        selected === "/contact" || selected === "/contact/" ? true : false
      }
      onClick={() => navigate("/contact")}
    >
      <p>Contact</p>
    </Category>
  </Wrapper>
)

export default Header

const Wrapper = styled.header`
  position: sticky;
  background-color: #fff;
  height: 40px;
  display: flex;
  z-index: 5000;
`
export interface CategoryProps {
  selected: boolean
}

const Category = styled.div`
  width: 213px;
  background: ${(props: CategoryProps) => (props.selected ? "#000" : "#fff")};
  text-align: center;
  position: relative;
  cursor: pointer;

  p {
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    font-family: Raleway, Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    font-weight: 900;
    font-size: 24px;
    color: ${(props: CategoryProps) => (props.selected ? "#fff" : "#000")};
  }
  :hover {
    background: #000000;
    p {
      color: #000;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #fff;
    }
  }
`
