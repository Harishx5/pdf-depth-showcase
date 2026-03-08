import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Brain, Code2, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: Brain, title: 'AI & Prompt Engineering', desc: 'Crafting efficient prompts for GPT-4 and other LLMs to achieve accurate, production-ready results.' },
    { icon: Code2, title: 'Full Stack Development', desc: 'Building scalable web applications with React, TypeScript, and modern backend services.' },
    { icon: Sparkles, title: 'Creative Problem Solver', desc: 'Leveraging AI tools and no-code platforms to deliver rapid, high-quality solutions.' },
  ];

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Turning <span className="text-gradient">Ideas</span> Into Reality
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          I am a dedicated professional with proficiency in Generative AI and Prompt Engineering, 
          developing efficient prompts for AI models such as GPT-4 to achieve accurate results. 
          I specialize in creating proper prompts, adjusting AI models, and using generative AI 
          to enhance creativity and address various challenges. I continuously follow the latest 
          trends in AI to create effective solutions that enhance performance and drive automation.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <ScrollAnimation key={i} delay={0.15 + i * 0.1}>
            <div className="glass rounded-2xl p-8 hover:glow-border transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default About;
