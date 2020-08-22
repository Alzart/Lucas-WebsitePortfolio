import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      clown: file(relativePath: { eq: "Clown_Dumby.png" }) {
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
      <SEO title="Contact" />
      <Wrapper>
        <h5>Let's bring life to your stories.</h5>
        <br />
        <div>
          <a
            href="mailto:laj.depinho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" />
          </a>
          <p>laj.depinho@gmail.com</p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/lucas-de-pinho-018902122/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <p>LinkedIn</p>
        </div>
      </Wrapper>
      <Img
        fluid={data.clown.childImageSharp.fluid}
        style={{
          position: "relative",
          top: "10vh",
          left: "10%",
          width: "30%",
          transform: "scaleX(-1)",
        }}
      />
      <Footer>
        <span>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/antoine-hannelais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antoine Hannelais
          </a>
        </span>
        <span> Designed by Lucas De Pinho</span>
      </Footer>
    </Layout>
  )
}

export default ProjectsPage

const Wrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 30%;
  display: flex;
  max-width: 50%;
  flex-direction: column;
  h5 {
    display: inline-block;
    text-transform: uppercase;
    font-size: 44px;
    font-family: Raleway;
  }
  div {
    display: flex;
  }
  p {
    position: relative;
    font-family: Manjari;
    font-size: 24px;
    transform: translateY(50%);
  }
  a {
    margin: 10px;
    color: #000 !important;
    text-decoration: none;
    background: #fff;
    width: 80px;
    height: 80px;
    font-size: 40px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
    border: 3px solid #000 !important;
    border-radius: 50%;
    display: flex;
    transition: all 0.25s;
    i {
      margin: auto;
    }
    :hover {
      color: #fff !important;
      background: #000;
      border-color: #fff !important;
    }
  }
`
const Footer = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: Manjari;
  font-size: 18px;
  color: #787878;
  span {
    margin: 20px;
  }
  a {
    color: #787878;
    text-decoration: none;
    transition: 0.3s all;
    :hover {
      text-decoration: underline;
    }
  }
`
