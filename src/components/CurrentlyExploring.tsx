import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { currentlyExploringDefaults } from '@/data/defaults';

const CurrentlyExploring: React.FC = () => {
  const { data } = useSiteContent('currently_exploring', currentlyExploringDefaults);

  return (
    <section id="currently_exploring" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Currently Exploring</h2>
        <div className="flex flex-wrap gap-2">
          {data.topics?.map((topic: string, i: number) => (
            <span key={i} className="text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
              {topic}
            </span>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CurrentlyExploring;
