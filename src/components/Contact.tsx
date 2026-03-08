import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle, Github, Linkedin, FileDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const closePopover = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowOptions(false);
      setIsClosing(false);
    }, 200);
  };

  const togglePopover = () => {
    if (showOptions) {
      closePopover();
    } else {
      setShowOptions(true);
    }
  };

  const openEmail = () => {
    const link = document.createElement('a');
    link.href = 'mailto:harishkanna068@gmail.com';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    const fallbackTimer = setTimeout(() => {
      window.open(
        'https://mail.google.com/mail/?view=cm&to=harishkanna068@gmail.com',
        '_blank'
      );
    }, 800);
    const onBlur = () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('blur', onBlur);
    };
    window.addEventListener('blur', onBlur);
    setTimeout(() => {
      document.body.removeChild(link);
      window.removeEventListener('blur', onBlur);
    }, 3000);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closePopover();
    openEmail();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        closePopover();
      }
    };
    if (showOptions) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showOptions]);

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'harishkanna068@gmail.com', onClick: () => openEmail(), interactive: true },
    { icon: Phone, label: 'Phone', value: '+91 8056073997', onClick: () => window.open('tel:+918056073997'), interactive: true },
    { icon: MapPin, label: 'Location', value: 'India', onClick: undefined, interactive: false },
  ];

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
          {contactItems.map((item, i) => (
            <div
              key={i}
              onClick={item.onClick}
              role={item.interactive ? 'button' : undefined}
              tabIndex={item.interactive ? 0 : undefined}
              className={`glass rounded-2xl p-6 group transition-all duration-500 ${
                item.interactive
                  ? 'cursor-pointer hover:glow-border hover:-translate-y-1 active:scale-[0.98]'
                  : 'cursor-default'
              }`}
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
              <p className={`text-sm text-foreground break-all transition-colors ${
                item.interactive ? 'group-hover:text-primary' : ''
              }`}>{item.value}</p>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.25}>
        <div className="relative inline-block" ref={popoverRef}>
          <button
            onClick={togglePopover}
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Say Hello
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </button>

          {showOptions && (
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 ${
                isClosing ? 'animate-scale-out opacity-0' : 'animate-scale-in'
              }`}
            >
              {/* Caret arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-card border-l border-t border-border" />

              <div className="relative flex gap-2 p-2 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-lg">
                <a
                  href="mailto:harishkanna068@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-accent transition-colors text-foreground text-sm font-medium whitespace-nowrap"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </a>
                <a
                  href="https://wa.me/918056073997?text=Hi%F0%9F%91%8B"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => closePopover()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-accent transition-colors text-foreground text-sm font-medium whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </ScrollAnimation>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/50">
        <div className="flex items-center justify-center gap-5 mb-6">
          <a
            href="mailto:harishkanna068@gmail.com"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
        </div>
        <p className="text-muted-foreground/50 text-sm">
          © 2026 SK Harish Kanna. Built with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
