import AboutMe from "./section/aboutMe-section";
import Hero from "./section/hero-section";
import Skills from "./section/skills-section";
import Portofolio from "./section/portofolio-section";
import Clients from "./section/clients-section";
import Contact from "./section/contact-section";

export default function HomeView() {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Portofolio />
            <Clients />
            <Contact />
        </div>
    )
}