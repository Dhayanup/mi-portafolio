import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TechnologiesSection from "@/components/TechnologiesSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation"
import "./globals.css"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Navigation />
    </main>
  )
}
