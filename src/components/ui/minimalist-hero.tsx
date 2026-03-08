import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm tracking-widest text-foreground/70 hover:text-foreground transition-colors duration-300"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} className="text-foreground/50 hover:text-foreground transition-colors duration-300">
    <Icon size={18} />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground flex flex-col', className)}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-8 md:px-16 py-6"
      >
        <a href="/" className="text-2xl font-bold tracking-tight">
          {logoText}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-0.5 bg-foreground" />
          <span className="w-6 h-0.5 bg-foreground" />
          <span className="w-6 h-0.5 bg-foreground" />
        </button>
      </motion.header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8 md:gap-16 py-12">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xs text-center md:text-left"
        >
          <p className="text-sm leading-relaxed text-foreground/60 mb-6">{mainText}</p>
          <a
            href={readMoreLink}
            className="text-sm font-medium tracking-widest uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            Read More
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-foreground/10 overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
              }}
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xs text-center md:text-right"
        >
          <p className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            {overlayText.part1}
            <br />
            <span className="font-bold">{overlayText.part2}</span>
          </p>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center justify-between px-8 md:px-16 py-6"
      >
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
        <span className="text-xs tracking-widest text-foreground/50 uppercase">
          {locationText}
        </span>
      </motion.div>
    </div>
  );
};
