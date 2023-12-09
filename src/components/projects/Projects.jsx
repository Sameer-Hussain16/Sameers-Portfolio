import "./projects.scss"
import React from "react"


const projects = [
    {
    title: "TaskTracker",
    desc: "React.js - Task Management - Productivity",
    GitHubLink: "https://github.com/Sameer-Hussain16/TaskTracker-React"
  },
    {
    title: "CliMate",
    desc: "React.js - Weather API - Dynamic",
    GitHubLink: "https://github.com/Sameer-Hussain16/CliMate-React"
  },
  {
    title: "Calci Lite",
    desc: "React.js - Calculator - Web Design",
    GitHubLink: "https://github.com/Sameer-Hussain16/BeautifulCalci-React"
  },

  {
    title: "UX/UI Design",
    desc: "Figma - Wireframes and Prototypes - Notion",
    GitHubLink: "https://tinyurl.com/5yrkeey8"
  },
  
]

const Projects = () => {
  return (
    <div>

      <div className="projects">
        <div className="left-project">Recent Work</div>
        <div className="right-project">

          {projects.map((work, index) => (
              <a key={index} href={work.GitHubLink}>
              <div className="all-project">
                <h1>{work.title}</h1>
                <p>{work.desc}</p>
              </div>
              </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

