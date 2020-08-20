import React, { useState } from "react"
import ProjectSeletor from "../components/ProjectSelector"
import Ducumentcia from "../components/Documentia"
import Concept from "../components/Concepts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dunamis from "../components/Dunamis"
import Sodexo from "../components/Sodexo"

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState("sodexo")
  const onChangeSelectProject = (project: string) => {
    console.log(project)
    setSelectedProject(project)
  }
  const displaySelectedProject = () => {
    switch (selectedProject) {
      case "dunamis":
        return <Dunamis />
      case "documentia":
        return <Ducumentcia />
      case "sodexo":
        return <Sodexo />
      case "concept":
        return <Concept />

      default:
        return <div>Error : Project Not Found</div>
    }
  }
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectSeletor
        selectedProject={selectedProject}
        onChangeSelectProject={onChangeSelectProject}
      />
      {displaySelectedProject()}
    </Layout>
  )
}

export default ProjectsPage
