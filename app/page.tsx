import About from "@/components/about";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import ProjectsFinal from "@/components/projects-final";
import Skills from "@/components/skills";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Divider />
            <About />
            <ProjectsFinal />
            {/* <Skills /> */}
            <Contact />
        </main>
    );
}
