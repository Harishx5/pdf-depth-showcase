import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { educationDefaults } from '@/data/defaults';

const Education: React.FC = () => {
  const { data } = useSiteContent('education', educationDefaults);

  return (
    <section id="education" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Education</h2>
      </ScrollAnimation>

      <div className="space-y-6">
        {data.entries?.map((edu: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="border-l-2 border-border pl-5">
              <h3 className="text-base font-medium text-foreground">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              {edu.current && (
                <span className="text-xs text-muted-foreground">(in progress)</span>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Education;
