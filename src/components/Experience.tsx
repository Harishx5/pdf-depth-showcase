import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    'Built AI-driven applications using prompt engineering and LLM integrations',
    'Developed front-end UI components using React, TypeScript, and modern frameworks',
    'Integrated backend services such as Supabase and Netlify for scalable deployment',
    'Designed AI workflows and automation systems using Generative AI tools',
    'Engineered prompt templates improving response accuracy by 30–40%',
    'Built multiple deployed AI-powered applications including inventory and skill-exchange platforms',
    'Implemented Agentic AI patterns for autonomous task execution and intelligent recommendations',
  ];

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Where I've <span className="text-gradient">Worked</span>
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:glow-border transition-all duration-500">
          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Software Developer Intern</h3>
              </div>
              <p className="text-primary font-medium text-lg">Marzelet Info Tech</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-muted-foreground text-sm">January 2026 — Present</p>
              <p className="text-muted-foreground/60 text-sm">Chennai, India</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <ScrollAnimation key={i} delay={0.2 + i * 0.05} direction="left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;
