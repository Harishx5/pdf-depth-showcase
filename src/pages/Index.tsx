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


const Hero = React.lazy(() => import('@/components/Hero'));

const Index = () => {
  useVisitorTracking();
  return (
    <div className="min-h-screen bg-background">
      
      <LoadingScreen />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Hero />
      </Suspense>
      <About />
      <AICapabilities />
      <AIProjects />
      <Skills />
      <PromptShowcase />
      <CurrentlyExploring />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
