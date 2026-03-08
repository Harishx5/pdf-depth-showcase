import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { aiProjectsDefaults } from '@/data/defaults';

const AIProjects: React.FC = () => {
  const { data } = useSiteContent('ai_projects', aiProjectsDefaults);

  return (
    <section id="ai-projects" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm tracking-widest uppercase">{data.section_label}</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          {data.title_prefix}<span className="text-gradient">{data.title_highlight}</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">{data.description}</p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((project, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.1} direction="scale">
            <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative min-h-[120px]">
                <div className={`transition-opacity duration-500 ${project.screenshot ? 'group-hover:opacity-0' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground pr-4">{project.title}</h3>
                    <span className="shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">AI</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="absolute bottom-0 left-0 -right-96 w-[calc(100%+90rem)] object-contain rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-fade-in pointer-events-none z-10 shadow-2xl"
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="px-3 py-1 text-xs rounded-lg bg-secondary/50 text-foreground border border-border">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-foreground hover:bg-secondary/50 transition-colors">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default AIProjects;
