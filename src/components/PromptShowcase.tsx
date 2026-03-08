import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Terminal, ArrowDown, Zap } from 'lucide-react';

const examples = [
  {
    id: 'content',
    title: 'AI Content Generator',
    prompt: `Role: AI Content Strategist
Task: Generate SEO optimized article
Constraints: 1000 words, keyword density 2%
Output Format: Markdown with headings`,
    output: 'Structured, keyword-rich articles with proper heading hierarchy and meta descriptions.',
  },
  {
    id: 'data',
    title: 'AI Data Analyzer',
    prompt: `Analyze the dataset and detect anomalies
in sales patterns.

Return:
  - Key insights
  - Predictions for next quarter
  - Visual summary recommendations`,
    output: 'Automated anomaly detection with actionable insights and visualization suggestions.',
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot Logic',
    workflow: [
      'User Input',
      'Prompt Template',
      'LLM Processing',
      'Structured Output',
    ],
  },
];

const PromptShowcase: React.FC = () => {
  const [active, setActive] = useState(0);
  const ex = examples[active];

  return (
    <section id="prompt-showcase" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-3">
          <Terminal className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm tracking-widest uppercase">Prompt Engineering</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          LLM <span className="text-gradient">Workflow Design</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Demonstrating structured prompt design, LLM architecture thinking, and AI automation workflows.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {examples.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                active === i
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8">
          {'workflow' in ex && ex.workflow ? (
            <div>
              <h3 className="text-foreground font-semibold mb-6">{ex.title} — Workflow</h3>
              <div className="flex flex-col items-center gap-1">
                {ex.workflow.map((step, si) => (
                  <React.Fragment key={si}>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border w-full max-w-xs text-center justify-center">
                      <Zap className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground font-medium">{step}</span>
                    </div>
                    {si < ex.workflow!.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-muted-foreground my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Prompt Structure</h4>
                <pre className="text-sm text-foreground bg-secondary/30 border border-border rounded-xl p-5 whitespace-pre-wrap font-mono leading-relaxed">
                  {(ex as any).prompt}
                </pre>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Expected Output</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {(ex as any).output}
                </p>
              </div>
            </div>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default PromptShowcase;
