import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { Card } from "./ui/card";

const Skills = () => {
    const data = skillsData;
    return (
        <div
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[8rem]"
            id="skills"
        >
            <SectionHeading title="Skills" />

            <div className="flex justify-center items-center">
                {data.map((item, index) => (
                    <Card key={index}>{item}</Card>
                ))}
            </div>
        </div>
    );
};

export default Skills;
