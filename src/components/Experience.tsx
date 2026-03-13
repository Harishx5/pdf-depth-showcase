import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { experienceDefaults } from '@/data/defaults';

const Experience: React.FC = () => {
  const { data } = useSiteContent('experience', experienceDefaults);

  // Support both single-item legacy format and multi-item format
  const items = data.items || [{
    role: data.job_title,
    company: data.company,
    period: data.period,
    location: data.location,
    achievements: data.achievements,
  }];

  return (
    <section id="experience" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Experience</h2>
      </ScrollAnimation>

      <div className="space-y-8">
        {items.map((item: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="border-l-2 border-border pl-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-base font-medium text-foreground">{item.role}</h3>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.company}{item.location ? ` · ${item.location}` : ''}</p>
              {item.achievements?.length > 0 && (
                <ul className="space-y-1">
                  {item.achievements.map((a: string, j: number) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                      — {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Experience;
