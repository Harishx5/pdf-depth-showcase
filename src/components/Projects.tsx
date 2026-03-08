import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'InvexAI',
    desc: 'AI-powered inventory management system for SMEs with demand forecasting, sales analysis, and real-time stock monitoring.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Gemini'],
    link: 'https://invexai.netlify.app',
    highlight: true,
  },
  {
    name: 'SkillSwap',
    desc: 'Peer-to-peer skill exchange platform enabling users to trade skills with matching system, real-time chat, and ratings.',
    tech: ['React', 'TailwindCSS', 'Supabase', 'Firebase'],
    link: 'https://skillswappro.netlify.app',
    highlight: true,
  },
  {
    name: 'Hella AI',
    desc: 'Advanced AI-powered chatbot for intelligent, human-like conversations across research, coding, and business strategies.',
    tech: ['React', 'TailwindCSS', 'Gemini', 'Lovable'],
    link: 'https://hellalogin.netlify.app',
    highlight: false,
  },
  {
    name: 'SAP HR ERP',
    desc: 'Enterprise HR management system digitizing employee data, attendance, leave, and payroll integration using SAP HCM.',
    tech: ['React', 'TailwindCSS', 'V0', 'Replit'],
    link: 'https://saphr.netlify.app',
    highlight: false,
  },
  {
    name: 'Billing Software',
    desc: 'Custom billing system for mechanic shops with automated invoicing, real-time calculations, and mobile-friendly UI.',
    tech: ['React', 'TailwindCSS', 'Gemini', 'Lovable'],
    link: 'https://om-muruga-billing.netlify.app',
    highlight: false,
  },
  {
    name: 'Hoops Hub',
    desc: 'Online basketball store with product catalog, customer reviews, and secure checkout for athletes of all levels.',
    tech: ['React', 'TailwindCSS', 'Bolt', 'Lovable'],
    link: 'https://deluxe-gumption-e4e2c7.netlify.app',
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass rounded-2xl p-8 block group cursor-pointer transition-all duration-500 hover:glow-border hover:-translate-y-1 ${
                project.highlight ? 'md:col-span-1' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
