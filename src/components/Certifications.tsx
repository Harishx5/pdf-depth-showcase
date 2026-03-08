import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Award } from 'lucide-react';

const certs = [
  { title: 'Certified Specialist in Generative AI', issuers: ['Microsoft', 'IBM', 'AWS', 'Oracle'] },
  { title: 'AI Tools Mastery Certification', issuers: ['Microsoft', 'IBM', 'AIGENXT'] },
  { title: 'AI Prompt Engineering', issuers: ['Microsoft', 'IBM', 'AWS', 'Infosys'] },
  { title: 'ChatGPT on Python', issuers: ['Simplilearn'] },
  { title: 'Agentic AI', issuers: ['Anthropic (Open Claw)'] },
  { title: 'Claude Code in Action', issuers: ['Anthropic'] },
];

const Certifications: React.FC = () => {
  return (
    <section className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Certifications</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Professional <span className="text-gradient">Credentials</span>
        </h2>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <ScrollAnimation key={i} delay={0.1 + i * 0.08} direction="scale">
            <div className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500 group h-full">
              <Award className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-foreground mb-3">{cert.title}</h3>
              <div className="flex flex-wrap items-center gap-1.5">
                {cert.issuers.map((issuer, idx) => (
                  <React.Fragment key={issuer}>
                    <span className="text-xs text-muted-foreground">{issuer}</span>
                    {idx < cert.issuers.length - 1 && (
                      <span className="text-xs text-border">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
