import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import SectionHeading from "./section-heading";
import Divider from "./divider";

const Experience = () => {
    return (
        <div
            className="pb-28 scroll-mt-[8rem] w-9/10"
            id="experience"
        >
            <SectionHeading title="Experience" />
            <div className="flex flex-col justify-center items-center md:max-w-[50rem]">
                <Card className="">
                    <CardHeader>
                        <CardTitle>2019-2022</CardTitle>
                        <CardDescription>Academic</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="">
                            I have completed my Bachelor's in Computer Science
                            from Midnapore College. During this time I learned
                            fundamentals about Computers. Got into web
                            development.
                        </p>
                    </CardContent>
                </Card>
                <Divider />
                <Card>
                    <CardHeader>
                        <CardTitle className="flex flex-row">
                            2022 <p className="text-xs">January </p>{" "}
                            &nbsp;-&nbsp;2023 <p className="text-xs">May</p>
                            &nbsp;
                            <p className="text-zinc-400 text-base">
                                (1.5 Years)
                            </p>
                        </CardTitle>
                        <CardDescription>
                            Java Full Stack Developer @Wipro
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row">
                        Joined Wipro as a Java Fullstack developer. Learned a
                        lot about the JAVA Ecosystem. At this time my main work
                        was to build REST APIs using the Spring framework. Got some
                        opportunity to work on React JS.
                    </CardContent>
                </Card>
                <Divider />
                <Card>
                    <CardHeader>
                        <CardTitle className="flex flex-row">
                            2023 <p className="text-xs">May </p>{" "}
                            &nbsp;-&nbsp;Current &nbsp;
                            <p className="text-zinc-400 text-base">(Ongoing)</p>
                        </CardTitle>
                        <CardDescription>
                            Next JS, Express, OpenAPI, TypeScript @Wipro
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="">
                            Started focusing on the JS Ecosystem and started
                            working on Next JS. Building backend in Next and
                            Express. Using Typescript extensively. Building
                            OpenAPI specs for a client.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Experience;
