import { HeroSection } from "../components/hero"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects"
import { SkillsSection } from "../components/skills"
import { ExperienceSection } from "../components/experience"
import { ContactSection } from "../components/contact"
import { Navigation } from "../components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
