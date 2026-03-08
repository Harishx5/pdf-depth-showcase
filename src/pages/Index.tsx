import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AICapabilities from '@/components/AICapabilities';
import AIProjects from '@/components/AIProjects';
import PromptShowcase from '@/components/PromptShowcase';
import CurrentlyExploring from '@/components/CurrentlyExploring';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import CustomSections from '@/components/CustomSections';
import LoadingScreen from '@/components/LoadingScreen';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';
import { useSiteContent } from '@/hooks/useSiteContent';
import { DEFAULT_SECTION_ORDER } from '@/components/ContentManager';

const Hero = React.lazy(() => import('@/components/Hero'));

const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  hero: (
    <Suspense key="hero" fallback={<div className="min-h-screen bg-background" />}>
      <Hero />
    </Suspense>
  ),
  about: <About key="about" />,
  ai_capabilities: <AICapabilities key="ai_capabilities" />,
  ai_projects: <AIProjects key="ai_projects" />,
  skills: <Skills key="skills" />,
  prompt_showcase: <PromptShowcase key="prompt_showcase" />,
  currently_exploring: <CurrentlyExploring key="currently_exploring" />,
  experience: <Experience key="experience" />,
  projects: <Projects key="projects" />,
  education: <Education key="education" />,
  certifications: <Certifications key="certifications" />,
  contact: <Contact key="contact" />,
};

const Index = () => {
  useVisitorTracking();
  const { data: orderData } = useSiteContent<{ order: string[] }>('section_order', { order: DEFAULT_SECTION_ORDER });
  const order = orderData.order || DEFAULT_SECTION_ORDER;

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <Navbar />
      {order.map(key => {
        if (key.startsWith('custom_')) return null; // rendered by CustomSections below
        return SECTION_COMPONENTS[key] || null;
      })}
      <CustomSections order={order} />
    </div>
  );
};

export default Index;
