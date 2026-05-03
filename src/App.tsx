import { lazy, Suspense, useState } from 'react'
import { AmbientBackdrop } from './components/AmbientBackdrop'
import { DeferredSection } from './components/DeferredSection'
import { NavBar } from './components/NavBar'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ImpactSection } from './sections/ImpactSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { useActiveSection } from './hooks/useActiveSection'
import { useThemeMode } from './hooks/useThemeMode'
import {
  demoProjects,
  sectionLinks,
  type Project,
  type SectionId,
} from './utils/portfolioData'
// Lazy Loads
const LiveDemoSection = lazy(() => import('./sections/LiveDemoSection'))
const TerminalSection = lazy(() => import('./sections/TerminalSection'))
const ProjectArchitectureModal = lazy(
  () => import('./components/ProjectArchitectureModal'),
)
const sectionIds = sectionLinks.map(({ id }) => id)

function App() {
  const { theme, toggleTheme } = useThemeMode()
  const activeSection = useActiveSection(sectionIds)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleNavigate = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="relative isolate min-h-screen">
        <AmbientBackdrop />

        <div className="mx-auto max-w-[1200px] px-4 py-4 md:px-6 md:py-5 lg:px-8">
          <NavBar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <main className="space-y-6 pb-10 md:space-y-8 md:pb-14">
            <HeroSection onNavigate={handleNavigate} />
            <ImpactSection />
            <SkillsSection />
            <ProjectsSection onOpenArchitecture={setSelectedProject} />
            <DeferredSection
              sectionId="demos"
              component={LiveDemoSection}
              componentProps={{ projects: demoProjects }}
              placeholderLabel="Loading highlighted demos"
            />
            <DeferredSection
              sectionId="terminal"
              component={TerminalSection}
              componentProps={{
                onNavigate: handleNavigate,
                onToggleTheme: toggleTheme,
                theme,
              }}
              placeholderLabel="Booting terminal playground"
            />
            <AboutSection />
            <ContactSection />
          </main>

          <FooterSection />
        </div>
      </div>

      <Suspense fallback={null}>
        {selectedProject ? (
          <ProjectArchitectureModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </Suspense>
    </>
  )
}

export default App
