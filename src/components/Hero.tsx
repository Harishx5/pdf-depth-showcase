import React from 'react';
import { Github, Mail, FileText, Linkedin } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { heroDefaults } from '@/data/defaults';

const Hero: React.FC = () => {
  const { data } = useSiteContent('hero', heroDefaults);

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
        {data.name}
      </h1>
      <p className="text-lg text-muted-foreground mb-4">
        {data.subtitle}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        {data.description}
      </p>
      <div className="flex items-center gap-5 text-sm">
        {data.github_url && (
          <a href={data.github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {data.linkedin_url && (
          <a href={data.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        )}
        {data.email && (
          <a href={`mailto:${data.email}`} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            Email
          </a>
        )}
        {data.resume_url && (
          <a href={data.resume_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="w-4 h-4" />
            Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
