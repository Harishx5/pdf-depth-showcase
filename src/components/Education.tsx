import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { GraduationCap } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { educationDefaults } from '@/data/defaults';

const Education: React.FC = () => {
  const { data } = useSiteContent('education', educationDefaults);

  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">{data.section_label}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          {data.title_prefix}<span className="text-gradient">{data.title_highlight}</span>
        </h2>
      </ScrollAnimation>

      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
        <div className="space-y-8">
          {data.entries.map((edu, i) => (
            <ScrollAnimation key={i} delay={0.1 + i * 0.12} direction="left">
              <div className="flex items-start gap-6 md:gap-8 relative">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 z-10 ${edu.current ? 'bg-primary/20 border border-primary/40' : 'bg-secondary border border-border'}`}>
                  <GraduationCap className={`w-5 h-5 md:w-6 md:h-6 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    {edu.current && (
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">Pursuing</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">{edu.period}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
