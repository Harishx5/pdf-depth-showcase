import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import DynamicIcon from './DynamicIcon';
import { useSiteContent } from '@/hooks/useSiteContent';
import { aboutDefaults } from '@/data/defaults';

const About: React.FC = () => {
  const { data } = useSiteContent('about', aboutDefaults);

  return (
    <section id="about" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-4">About</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          {data.description}
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-3 gap-5">
        {data.highlights.map((item: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
              <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center mb-3">
                <DynamicIcon name={item.icon} className="w-4 h-4 text-foreground" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default About;
