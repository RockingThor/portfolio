import About from "@/components/about";
import Contact from "@/components/contact";
import Copyright from "@/components/copyright";
import Divider from "@/components/divider";
import Experience from "@/components/experience";

import Intro from "@/components/intro";
import ProjectsFinal from "@/components/projects-final";
import Skills from "@/components/skills";
import { TextRevealCard } from "@/components/text-reveal";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Divider
                margin="my-24"
                display="hidden"
            />
            <About />
            <ProjectsFinal />
            <Experience />
            {/* <Skills /> */}
            <div className="mb-[8rem] hidden sm:block">
                <TextRevealCard
                    text="You know the business"
                    revealText="I know the technology"
                />
            </div>
            <Contact />
            <Copyright />
        </main>
    );
}
