import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { skillsDefaults } from '@/data/defaults';

const Skills: React.FC = () => {
  const { data } = useSiteContent('skills', skillsDefaults);

  return (
    <section id="skills" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Skills &amp; Technologies</h2>
      </ScrollAnimation>

      <div className="space-y-6">
        {data.categories?.map((cat: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">{cat.title || cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills?.map((skill: any, j: number) => (
                  <span
                    key={j}
                    className="text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                  >
                    {typeof skill === 'string' ? skill : skill.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
