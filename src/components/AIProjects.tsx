import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const aiProjects = [
  {
    title: 'InvexAI – AI Inventory Management',
    description: 'An AI-powered inventory prediction system that analyzes historical sales data to forecast future stock demand using machine learning models.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI-Powered Skill Swap Platform',
    description: 'An intelligent skill-matching platform that uses AI to connect learners with complementary skills for peer-to-peer knowledge exchange.',
    tech: ['React', 'TypeScript', 'Supabase', 'GPT-4', 'TailwindCSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'HELLA AI – Intelligent Chatbot',
    description: 'A conversational AI chatbot built with LLM workflows, capable of context-aware responses and multi-turn dialogue management.',
    tech: ['Python', 'LangChain', 'GPT-4', 'FastAPI', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Intrusion Detection System (IDS)',
    description: 'A machine learning-based network intrusion detection system that classifies network traffic patterns to identify potential security threats.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NetworkX'],
    githubUrl: '#',
  },
];

const AIProjects: React.FC = () => {
  return (
    <section id="ai-projects" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm tracking-widest uppercase">AI Projects</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Building <span className="text-gradient">Intelligent Systems</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16">
          Real-world AI applications using Machine Learning, LLM workflows, and intelligent automation.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {aiProjects.map((project, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.1} direction="scale">
            <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              {/* Gradient accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground pr-4">{project.title}</h3>
                <span className="shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">
                  AI
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="px-3 py-1 text-xs rounded-lg bg-secondary/50 text-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
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
