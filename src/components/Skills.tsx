import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Progress } from '@/components/ui/progress';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
} from 'recharts';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Prompt Engineering', level: 92 },
      { name: 'Generative AI', level: 88 },
      { name: 'Machine Learning', level: 75 },
      { name: 'LLM Workflows', level: 85 },
      { name: 'AI Automation', level: 82 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Flask', level: 72 },
      { name: 'FastAPI', level: 65 },
      { name: 'SQL / MySQL', level: 78 },
      { name: 'Supabase', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Firebase', level: 70 },
      { name: 'Netlify', level: 80 },
      { name: 'API Integration', level: 82 },
    ],
  },
];

const radarData = [
  { subject: 'AI/ML', value: 85 },
  { subject: 'Frontend', value: 87 },
  { subject: 'Backend', value: 76 },
  { subject: 'Prompt Eng.', value: 92 },
  { subject: 'Tools', value: 80 },
  { subject: 'System Design', value: 70 },
];

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <Progress
        value={isVisible ? level : 0}
        className="h-2 bg-secondary/50"
      />
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <ScrollAnimation>
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          My <span className="text-gradient">Toolkit</span>
        </h2>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Skill bars */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <ScrollAnimation key={ci} delay={0.1 + ci * 0.08} direction="scale">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-base font-semibold text-foreground mb-5">{cat.title}</h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={si} name={skill.name} level={skill.level} delay={si * 0.05} />
                ))}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Radar chart */}
        <ScrollAnimation delay={0.3} direction="scale">
          <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center h-full">
            <h3 className="text-base font-semibold text-foreground mb-4">Skill Overview</h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;
