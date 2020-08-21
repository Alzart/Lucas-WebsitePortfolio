import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AuboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      lucas: file(relativePath: { eq: "LUCAS_NB.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Frame>
          <Img
            fluid={data.lucas.childImageSharp.fluid}
            style={{
              width: "245px",
              height: "245px",
            }}
          />
          <p>Bonjour.</p>
        </Frame>
        <p>
          I’m an enthusiastic drawer. It’s so nice when my audience feel what I
          want to portray. I deeply believe that illustration is a powerful
          language to talk directly to the heart of people, without any kind of
          judgement.
        </p>
      </Wrapper>
      <div style={{ width: "80%", margin: "auto", display: "flex" }}>
        <Item>
          <SectionHead>Experiences</SectionHead>
          <div>
            <h5>2020</h5>
            <ul>
              <li>
                <b>Designer intern at Sodexo</b>
                <p>Service design / Interior / Design / Digital Design / R&D</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2019</h5>
            <ul>
              <li>
                <b>Aequo workshop, Design process from storytelling</b>
                <p>Narrative design / conceptualization</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2018</h5>
            <ul>
              <li>
                <b>Co-design of “Documentia” a RPG Narrative Game</b>
                <p>
                  Environnement / Character Design / Animation / Co-Writing /
                  Narrative design
                </p>
              </li>
              <li>
                <b>
                  Art direction of “Dunamis” a medical video game for Japet
                  Medical Devices
                </b>
                <p>
                  World Building / Character design / Evironnement / StoryBoard
                  / Narrative Design
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2017</h5>
            <ul>
              <li>
                <b>Waiter in restaurant</b>
                <p>Service / Bar / Cleaning</p>
              </li>
              <li>
                <b>Directing of a short student’s film</b>
                <p>
                  Writing / Production / Logistic / Casting / Lightning /
                  Storyboard / Editing / Colorcorrection
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2016</h5>
            <ul>
              <li>
                <b>Waiter in restaurant</b>
                <p>Service / Bar / Cleaning</p>
              </li>
            </ul>
          </div>
        </Item>
        <Item>
          <SectionHead>Education</SectionHead>
          <div>
            <h5>2020</h5>
            <ul>
              <li>
                <b>Master’s Degree in Product Design </b>
                <p>Institut Supérieur du Design Rubika, France</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2018</h5>
            <ul>
              <li>
                <b>Bachelor of arts, Animation</b>
                <p>Supinfocom Rubika, France</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>2015</h5>
            <ul>
              <li>
                <b>Art Certificate</b>
                <p>Saint-Luc Tournai Institute, Belgium</p>
              </li>
              <li>
                <b>CESS</b>
                <p>Illustration section</p>
              </li>
            </ul>
          </div>
          <SectionHead>Skill</SectionHead>
          <div>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Core</b>
              </li>
              <li>
                <p>Design Thinking</p>
              </li>
              <li>
                <p>Narrative Design</p>
              </li>
              <li>
                <p>Experience Design</p>
              </li>
              <li>
                <p>Storyboard</p>
              </li>
              <li>
                <p>Sketch</p>
              </li>
            </ul>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Tools</b>
              </li>
              <li>
                <p>Adobe Photoshop</p>
              </li>
              <li>
                <p>Adobe Illustrator</p>
              </li>
              <li>
                <p>Adobe Indesign</p>
              </li>
              <li>
                <p>Adobe After Effect</p>
              </li>
              <li>
                <p>Adobe Premiere</p>
              </li>
              <li>
                <p>Blender</p>
              </li>
            </ul>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Languages</b>
              </li>
              <li>
                <p>French native</p>
              </li>
              <li>
                <p>English fluent</p>
              </li>
            </ul>
          </div>
        </Item>
      </div>
    </Layout>
  )
}

export default AuboutPage
const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 10vh auto;
  width: 80%;
  p {
    margin: auto;
    padding-left: 20px;
    width: 50%;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`

const Frame = styled.div`
  position: relative;
  display: inline-block;
  padding: 1vh 1vh 1vh calc(1vh + 34px);
  text-align: center;
  background-color: #000;
  margin: auto;
  p {
    position: absolute;
    top: 50%;
    left: 10px;
    font-family: Raleway;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
    transform: translate(calc(12px + -50%), 0) rotate(-90deg);
  }
`
const Item = styled.div`
  max-width: 50%;
  margin: auto;
  div {
    b {
      font-family: Raleway;
    }
    display: flex;
    font-family: Manjari;
  }
  h5 {
    font-family: Raleway;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    text-align: right;
    color: #000;
  }
`

export const SectionHead = styled.p`
  position: relative;
  width: 200px;
  left: 5%;
  padding: 15px;
  background-color: #000;
  text-transform: uppercase;
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`
