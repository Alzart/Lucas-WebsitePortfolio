import React, { useState } from "react"
import ProjectSeletor from "../components/ProjectSelector"
import Ducumentcia from "../components/Documentia"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState("documentia")
  const onChangeSelectProject = (project: string) => {
    console.log(project)
    setSelectedProject(project)
  }
  const displaySelectedProject = () => {
    switch (selectedProject) {
      case "dunamis":
        return <div>Dunamis</div>
      case "documentia":
        return <Ducumentcia />
      case "sodexo":
        return <div>sodexo</div>
      case "concept":
        return <div>concept</div>

      default:
        return <div>Error : Project Not Found</div>
    }
  }
  return (
    <Layout location={window.location}>
      <SEO title="Projects" />
      <ProjectSeletor
        selectedProject={selectedProject}
        onChangeSelectProject={onChangeSelectProject}
      />
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
      {displaySelectedProject()}
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
    </Layout>
  )
}

export default ProjectsPage
