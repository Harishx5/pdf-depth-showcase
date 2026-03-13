import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import DynamicIcon from './DynamicIcon';
import { useSiteContent } from '@/hooks/useSiteContent';
import { aiCapabilitiesDefaults } from '@/data/defaults';

const AICapabilities: React.FC = () => {
  const { data } = useSiteContent('ai_capabilities', aiCapabilitiesDefaults);

  return (
    <section id="ai-capabilities" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-8">AI Capabilities</h2>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.cards?.map((cap: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors h-full">
              <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center mb-3">
                <DynamicIcon name={cap.icon} className="w-4 h-4 text-foreground" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2">{cap.title}</h3>
              <ul className="space-y-1.5">
                {cap.items?.map((item: string, j: number) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    — {item}
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
