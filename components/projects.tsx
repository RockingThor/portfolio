import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
    return (
        <section
            className="scroll-mt-28"
            id="projects"
        >
            <SectionHeading title="My projects" />
            <div className="">
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
