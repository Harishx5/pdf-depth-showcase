import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Bot, Cpu, BarChart3 } from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'Agentic AI Systems',
    items: [
      'Designing autonomous AI workflows',
      'Prompt chaining and tool-based agents',
      'AI task automation and orchestration',
    ],
  },
  {
    icon: Cpu,
    title: 'Generative AI',
    items: [
      'GPT-4 and Gemini integrations',
      'Advanced prompt engineering',
      'AI content generation systems',
    ],
  },
  {
    icon: BarChart3,
    title: 'Machine Learning Applications',
    items: [
      'Data-driven insights and analytics',
      'AI-powered predictions',
      'Intelligent recommendation systems',
    ],
  },
];

const AICapabilities: React.FC = () => {
  return (
    <section id="ai-capabilities" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Expertise</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          AI <span className="text-gradient">Capabilities</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.1}>
            <div className="glass rounded-2xl p-8 hover:glow-border transition-all duration-500 group h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{cap.title}</h3>
              <ul className="space-y-3">
                {cap.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default AICapabilities;
