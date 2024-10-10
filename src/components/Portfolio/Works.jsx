import React, { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // filter projects based on the category
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) =>
        project.category.toLowerCase().includes(item.name)
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* Projects navigation */}
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      {/* Projects display */}
      <div className="work__container container grid">
        {projects.map((project) => (
          <WorkItems item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
