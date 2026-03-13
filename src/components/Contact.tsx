import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { contactDefaults } from '@/data/defaults';

const Contact: React.FC = () => {
  const { data } = useSiteContent('contact', contactDefaults);

  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl font-semibold text-foreground mb-3">Get in touch</h2>
        <p className="text-muted-foreground mb-6">{data.description}</p>
        <div className="flex flex-col gap-3">
          {data.email && (
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              {data.email}
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
        </div>
      </ScrollAnimation>
      <div className="mt-16 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {data.footer_text ? data.footer_text.replace(/©\s*\d{4}\s*/, '') : ''}
      </div>
    </section>
  );
};

export default Contact;
