"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[8rem]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading title="About me" />
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, I decided
                to pursue my passion for programming. I joined{" "}
                <span className="font-medium">Wipro</span> as a JAVA Full Stack
                Developer and strengthened{" "}
                <span className="font-medium">full-stack web development</span>{" "}
                skills.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, Mysql, Spring, JAVA
                </span>
                . I am also familiar with{" "}
                <span className="font-medium">TypeScript and Prisma</span>. I am
                always looking to learn new technologies. I am currently serving
                as a{" "}
                <span className="font-medium">
                    full-time full-stack developer at Wipro.
                </span>
            </p>
            <p className="">
                <span className="italic">When I'm not coding</span>, I enjoy
                playing chess, watching cricket and movies. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">personal finance</span>.
            </p>
        </motion.section>
    );
};

export default About;
