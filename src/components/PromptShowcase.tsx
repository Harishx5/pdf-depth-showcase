import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { promptShowcaseDefaults } from '@/data/defaults';

const PromptShowcase: React.FC = () => {
  const { data } = useSiteContent('prompt_showcase', promptShowcaseDefaults);
  const [active, setActive] = useState(0);
  const ex = data.examples[active];

  return (
    <section id="prompt-showcase" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Prompt Engineering</h2>
        <p className="text-muted-foreground mb-8">{data.description}</p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.05}>
        <div className="flex gap-2 mb-5 flex-wrap">
          {data.examples.map((e: any, i: number) => (
            <button
              key={e.id}
              onClick={() => setActive(i)}
              className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                active === i
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>

        <div className="border border-border rounded-lg p-5">
          {'workflow' in ex && ex.workflow ? (
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">{ex.title} — Workflow</h3>
              <div className="flex flex-wrap items-center gap-2">
                {ex.workflow.map((step: string, si: number) => (
                  <React.Fragment key={si}>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-md">{step}</span>
                    {si < ex.workflow!.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-2">Prompt</h4>
                <pre className="text-sm text-foreground bg-muted rounded-md p-4 whitespace-pre-wrap font-mono leading-relaxed">
                  {(ex as any).prompt}
                </pre>
              </div>
              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-2">Output</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{(ex as any).output}</p>
              </div>
            </div>
          )}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default PromptShowcase;
