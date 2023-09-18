import { projectsData } from "@/lib/data";
import React from "react";
import ShowProjects from "./show-projects";
import SectionHeading from "./section-heading";

const ProjectsFinal = () => {
    const data = projectsData;
    return (
        <div className="mb-28">
            <SectionHeading title="Projects" />
            <div
                className="flex flex-col md:flex-col   items-center justify-center scroll-mt-40 w-9/10"
                id="projects"
            >
                {data.map((item, index) => (
                    <ShowProjects
                        key={index}
                        title={item.title}
                        tags={item.tags}
                        description={item.description}
                        githubLink={item.githubLink}
                        deploymentLink={item.deploymentLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsFinal;
