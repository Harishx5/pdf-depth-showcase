import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'glass py-3' : 'py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />)}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={cn('w-6 h-0.5 bg-foreground transition-all', mobileOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-6 h-0.5 bg-foreground transition-all', mobileOpen && 'opacity-0')} />
          <span className={cn('w-6 h-0.5 bg-foreground transition-all', mobileOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
