import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Backend & Tools',
    skills: ['Firebase', 'Supabase', 'Git', 'Netlify', 'Replit', 'API Integration'],
  },
  {
    title: 'AI & Prompt Engineering',
    skills: ['Generative AI', 'GPT-4', 'Gemini', 'Prompt Design', 'LLM Fine-tuning', 'AI Automation'],
  },
  {
    title: 'No-Code / Low-Code',
    skills: ['Lovable', 'Bolt', 'V0', 'Vibe Code Studio'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          My <span className="text-gradient">Toolkit</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, ci) => (
          <ScrollAnimation key={ci} delay={0.1 + ci * 0.1} direction="scale">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-4 py-2 text-sm rounded-xl border border-border bg-secondary/50 text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${si * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
