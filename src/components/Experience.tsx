import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import DynamicIcon from './DynamicIcon';
import { CheckCircle2 } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { experienceDefaults } from '@/data/defaults';

const Experience: React.FC = () => {
  const { data } = useSiteContent('experience', experienceDefaults);

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">{data.section_label}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          {data.title_prefix}<span className="text-gradient">{data.title_highlight}</span>
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:glow-border transition-all duration-500">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <DynamicIcon name={data.icon} className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{data.job_title}</h3>
              </div>
              <p className="text-primary font-medium text-lg">{data.company}</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-muted-foreground text-sm">{data.period}</p>
              <p className="text-muted-foreground/60 text-sm">{data.location}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.achievements.map((item, i) => (
              <ScrollAnimation key={i} delay={0.2 + i * 0.05} direction="left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;
