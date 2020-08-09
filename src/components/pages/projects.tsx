import React, { useState } from "react"
import ProjectSeletor from "../ProjectSelector"
import Documentcia from "../Documentia"
import Dunamis from "../Dunamis"
import Concepts from "../Concepts"
import Layout from "../layout"
import SEO from "../seo"

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState("concept")

  const onChangeSelectProject = (project: string) => {
    console.log(project)
    setSelectedProject(project)
  }
  const displaySelectedProject = () => {
    switch (selectedProject) {
      case "dunamis":
        return <Dunamis />
      case "documentia":
        return <Documentcia />
      case "sodexo":
        return <div>sodexo</div>
      case "concept":
        return <Concepts />

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
