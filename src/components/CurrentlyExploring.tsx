import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Rocket } from 'lucide-react';

const topics = [
  'Agentic AI',
  'Autonomous AI Systems',
  'RAG Architectures',
  'AI Agents',
  'Multi-Agent Orchestration',
  'Fine-Tuning LLMs',
];

const CurrentlyExploring: React.FC = () => {
  return (
    <section className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm tracking-widest uppercase font-semibold">Currently Exploring</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {topics.map((topic, i) => (
              <ScrollAnimation key={i} delay={0.05 * i} direction="scale">
                <span className="px-5 py-2.5 text-sm rounded-full border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default">
                  {topic}
                </span>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CurrentlyExploring;
