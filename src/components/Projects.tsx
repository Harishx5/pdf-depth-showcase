import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { projectsDefaults } from '@/data/defaults';

const Projects: React.FC = () => {
  const { data } = useSiteContent('projects', projectsDefaults);

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">{data.section_label}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          {data.title_prefix}<span className="text-gradient">{data.title_highlight}</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((project, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className={`glass rounded-2xl p-8 group transition-all duration-500 hover:glow-border hover:-translate-y-1 ${project.highlight ? 'ring-1 ring-primary/10' : ''}`}>
              <div className="relative min-h-[120px]">
                <div className={`transition-opacity duration-500 ${project.screenshot ? 'group-hover:opacity-0' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                      {project.highlight && <span className="text-[10px] uppercase tracking-widest text-primary/70 font-semibold">Top Project</span>}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    className="absolute bottom-0 -left-24 -right-40 w-[calc(100%+24rem)] object-contain rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-fade-in pointer-events-none z-10 shadow-2xl"
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
