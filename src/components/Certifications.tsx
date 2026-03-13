import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useSiteContent } from '@/hooks/useSiteContent';
import { certificationsDefaults } from '@/data/defaults';

const Certifications: React.FC = () => {
  const { data } = useSiteContent('certifications', certificationsDefaults);

  return (
    <section id="certifications" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Certifications</h2>
      </ScrollAnimation>

      <div className="space-y-4">
        {data.certs?.map((cert: any, i: number) => (
          <ScrollAnimation key={i} delay={0.05 * i}>
            <div className="flex items-start gap-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuers?.join(' · ')}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
