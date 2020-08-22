import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  selectedProject: string
  onChangeSelectProject: (project: string) => void
}
function ProjectSelector({ selectedProject, onChangeSelectProject }: Props) {
  const data = useStaticQuery(graphql`
    query {
      dunamis: file(relativePath: { eq: "01_Dunamis/Village.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      documencia: file(relativePath: { eq: "02_Documentia/Documentia.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sodexo: file(relativePath: { eq: "03_Sodexo/Acceuil.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      concept: file(relativePath: { eq: "Sophie15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Item
        name="dunamis"
        selectedProject={selectedProject === "dunamis"}
        onClick={() => onChangeSelectProject("dunamis")}
      >
        <Img
          className="image"
          fluid={data.dunamis.childImageSharp.fluid}
          imgStyle={{ objectPosition: "65% 50%" }}
          style={{ width: "100%", height: "100%" }}
        />
        <h3>Dunamis</h3>
        <p>
          Dunamis is a medical serious game. It aims to help patients to regain
          muscle force.
        </p>
      </Item>
      <Item
        name="documencia"
        selectedProject={selectedProject === "documentia"}
        onClick={() => onChangeSelectProject("documentia")}
      >
        <Img
          className="image"
          fluid={data.documencia.childImageSharp.fluid}
          imgStyle={{ objectPosition: "55% 50%" }}
          style={{ width: "100%", height: "100%" }}
        />
        <h3>Documentia</h3>
        <p>
          Documentia is a RPG Narrative game. It have been made in 3 days during
          the LUDUM DARE 43.
        </p>
      </Item>
      <Item
        name="sodexo"
        selectedProject={selectedProject === "sodexo"}
        onClick={() => onChangeSelectProject("sodexo")}
      >
        <Img
          className="image"
          fluid={data.sodexo.childImageSharp.fluid}
          imgStyle={{ objectPosition: "22% 50%" }}
          style={{ width: "100%", height: "100%" }}
        />
        <h3>Sodexo</h3>
        <p>
          LeFoodSpot is a brand new service from Sodexo. I had the chance to be
          part of his conception.
        </p>
      </Item>
      <Item
        name="concept"
        selectedProject={selectedProject === "concept"}
        onClick={() => onChangeSelectProject("concept")}
      >
        <Img
          className="image"
          fluid={data.concept.childImageSharp.fluid}
          //@ts-ignore
          imgStyle={{ objectPosition: "55% 50%" }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <h3>Concept</h3>
        <p>Here is some personnal and narrative images.</p>
      </Item>
    </Wrapper>
  )
}
export default ProjectSelector
const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  overflow: hidden;
`
interface ItemProps {
  selectedProject: boolean
  name: string
}
const Item = styled.div<ItemProps>`
  position: relative;
  width: ${props => (props.selectedProject ? "70%" : "10%")};
  height: 70vh;
  color: #fff;
  transition: 1s all;
  p {
    position: absolute;
    opacity: ${props => (props.selectedProject ? "1" : "0")};
    width: 600px;
    left: 150px;
    top: 80px;
    font-family: Manjari;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    transition: 1s all;
  }
  h3 {
    position: absolute;
    z-index: 500;
    top: 50%;
    left: 10px;
    color: ${props => (props.selectedProject ? "#fff" : "#000")};
    display: inline-block;
    text-transform: uppercase;
    font-family: Raleway;
    font-size: 44px;
    font-family: Raleway, Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    transition: 1s all;
    transform: translate(calc(22px + -50%), 0) rotate(-90deg);
  }
  :hover {
    h3 {
      color: #fff;
      transition: 0.4s all;
    }
  }
`
