import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Mail, Phone, MapPin, Github, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto text-center">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Let's Build <span className="text-gradient">Together</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.15}>
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'harishkanna068@gmail.com', href: 'mailto:harishkanna068@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+91 8056073997', href: 'tel:+918056073997' },
            { icon: MapPin, label: 'Location', value: 'India', href: undefined },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="glass rounded-2xl p-6 group hover:glow-border transition-all duration-500 block"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">{item.value}</p>
            </a>
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.25}>
        <a
          href="mailto:harishkanna068@gmail.com"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          Say Hello <ArrowUpRight className="w-5 h-5" />
        </a>
      </ScrollAnimation>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/50">
        <p className="text-muted-foreground/50 text-sm">
          © 2026 SK Harish Kanna. Built with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
