import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromCircle, GithubIcon } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    imageUrl: StaticImageData;
    githubLink: string;
    deploymentLink: string;
}

const ShowProjects = ({
    title,
    description,
    tags,
    imageUrl,
    githubLink,
    deploymentLink,
}: ProjectProps) => {
    const data = projectsData;
    return (
        <div className="p-2">
            <Card className="w-[300px] sm:w-[400px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="">
                    {tags?.map((data, index) => (
                        <Badge
                            variant="outline"
                            key={index}
                            className="p-2"
                        >
                            {data}
                        </Badge>
                    ))}
                </CardContent>
                <CardFooter>
                    <a
                        href={deploymentLink}
                        target="_blank"
                        className=""
                    >
                        <Button variant="secondary">
                            Live Deployment{" "}
                            <ArrowUpRightFromCircle className="h-4 w-4" />{" "}
                        </Button>
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        className="p-2"
                    >
                        <Button
                            variant="secondary"
                            className="rounded-full"
                        >
                            <GithubIcon className="h-4 w-4" />{" "}
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ShowProjects;
