import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { aiProjectsDefaults } from '@/data/defaults';

const AIProjects: React.FC = () => {
  const { data } = useSiteContent('ai_projects', aiProjectsDefaults);

  return (
    <section id="ai-projects" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-2">AI / ML Projects</h2>
        {data.description && (
          <p className="text-muted-foreground mb-8">{data.description}</p>
        )}
      </ScrollAnimation>

      <div className="space-y-6">
        {data.projects?.map((project: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
              {project.screenshot && (
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  loading="lazy"
                />
              )}
              <h3 className="text-base font-medium text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
              {project.tech?.length > 0 && (
                <p className="text-sm text-muted-foreground mb-3">
                  {project.tech.join(', ')}
                </p>
              )}
              <div className="flex items-center gap-4">
                {(project.githubUrl && project.githubUrl !== '#') && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {(project.liveUrl && project.liveUrl !== '#') && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
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
