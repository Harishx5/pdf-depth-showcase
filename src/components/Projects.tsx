import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'InvexAI',
    desc: 'AI-powered inventory management system for SMEs with Gemini-driven demand forecasting, sales analysis, and real-time stock monitoring.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Gemini'],
    link: 'https://invexai.netlify.app',
    github: '#',
    highlight: true,
  },
  {
    name: 'SkillSwap',
    desc: 'Peer-to-peer skill exchange platform with AI-powered matching system, real-time chat, and community ratings for collaborative learning.',
    tech: ['React', 'TailwindCSS', 'Supabase', 'Firebase'],
    link: 'https://skillswappro.netlify.app',
    github: '#',
    highlight: true,
  },
  {
    name: 'SAP HR ERP',
    desc: 'Enterprise HR management system digitizing employee data, attendance tracking, leave management, and payroll integration.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    link: 'https://saphr.netlify.app',
    github: '#',
    highlight: true,
  },
  {
    name: 'Billing Software',
    desc: 'Custom billing system for mechanic shops with automated invoicing, real-time calculations, and mobile-friendly interface.',
    tech: ['React', 'TailwindCSS', 'Gemini', 'Supabase'],
    link: 'https://om-muruga-billing.netlify.app',
    github: '#',
    highlight: false,
  },
  {
    name: 'Hoops Hub',
    desc: 'Online basketball store with product catalog, customer reviews, and secure checkout built with modern web technologies.',
    tech: ['React', 'TailwindCSS', 'TypeScript'],
    link: 'https://deluxe-gumption-e4e2c7.netlify.app',
    github: '#',
    highlight: false,
  },
  {
    name: 'HELLA AI',
    desc: 'Advanced AI-powered chatbot leveraging Gemini for intelligent, human-like conversations across research, coding, and business strategies.',
    tech: ['React', 'TailwindCSS', 'Gemini', 'TypeScript'],
    link: 'https://hellalogin.netlify.app',
    github: '#',
    highlight: false,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Featured <span className="text-gradient">Work</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div
              className={`glass rounded-2xl p-8 group transition-all duration-500 hover:glow-border hover:-translate-y-1 ${
                project.highlight ? 'ring-1 ring-primary/10' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {project.highlight && (
                    <span className="text-[10px] uppercase tracking-widest text-primary/70 font-semibold">Top Project</span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
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
