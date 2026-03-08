import React from 'react';
import Interactive3DScene from './Interactive3DScene';
import { Mail, Github, MapPin, ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Interactive3DScene />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk' }}>
          <span className="text-foreground">SK </span>
          <span className="text-gradient">Harish Kanna</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 tracking-wide">
          Full Stack Developer | Agentic AI & Machine Learning
        </p>
        <p className="text-base text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building intelligent web applications using Agentic AI systems, Generative AI, 
          and modern full-stack technologies.
        </p>

        <div className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> India</span>
          <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary" /> harishkanna068@gmail.com</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Github className="w-4 h-4 text-primary" /> GitHub
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
