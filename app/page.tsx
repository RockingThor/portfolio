import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import ProjectsFinal from "@/components/projects-final";
import ShowProjects from "@/components/show-projects";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Divider />
            <About />
            <ProjectsFinal />
        </main>
    );
}
