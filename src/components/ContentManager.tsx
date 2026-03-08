import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Save, Plus, Trash2, GripVertical } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { upsertSiteContent } from '@/hooks/useSiteContent';
import DynamicIcon, { ICON_OPTIONS } from '@/components/DynamicIcon';
import {
  heroDefaults, aboutDefaults, aiCapabilitiesDefaults, aiProjectsDefaults,
  skillsDefaults, promptShowcaseDefaults, currentlyExploringDefaults,
  experienceDefaults, projectsDefaults, educationDefaults, certificationsDefaults, contactDefaults,
} from '@/data/defaults';

const SECTIONS = [
  { key: 'hero', label: 'Hero' },
  { key: 'about', label: 'About' },
  { key: 'ai_capabilities', label: 'AI Capabilities' },
  { key: 'ai_projects', label: 'AI Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'prompt_showcase', label: 'Prompt Showcase' },
  { key: 'currently_exploring', label: 'Currently Exploring' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'education', label: 'Education' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'contact', label: 'Contact' },
] as const;

const DEFAULTS: Record<string, any> = {
  hero: heroDefaults, about: aboutDefaults, ai_capabilities: aiCapabilitiesDefaults,
  ai_projects: aiProjectsDefaults, skills: skillsDefaults, prompt_showcase: promptShowcaseDefaults,
  currently_exploring: currentlyExploringDefaults, experience: experienceDefaults,
  projects: projectsDefaults, education: educationDefaults, certifications: certificationsDefaults,
  contact: contactDefaults,
};

function IconPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          <DynamicIcon name={value} className="w-4 h-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="max-h-[300px]">
        {ICON_OPTIONS.map(icon => (
          <SelectItem key={icon} value={icon}>
            <div className="flex items-center gap-2">
              <DynamicIcon name={icon} className="w-4 h-4" />
              {icon}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ─── Section Editors ──────────────────────────────────────────

function HeroEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Name Prefix</Label><Input value={data.name_prefix} onChange={e => setData({ ...data, name_prefix: e.target.value })} /></div>
        <div><Label>Name Highlight</Label><Input value={data.name_highlight} onChange={e => setData({ ...data, name_highlight: e.target.value })} /></div>
      </div>
      <div><Label>Subtitle</Label><Input value={data.subtitle} onChange={e => setData({ ...data, subtitle: e.target.value })} /></div>
      <div><Label>Status Text</Label><Input value={data.status_text} onChange={e => setData({ ...data, status_text: e.target.value })} /></div>
      <div><Label>Description</Label><Textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-4">
        <div><Label>Email</Label><Input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} /></div>
        <div><Label>Location</Label><Input value={data.location} onChange={e => setData({ ...data, location: e.target.value })} /></div>
      </div>
      <div><Label>GitHub URL</Label><Input value={data.github_url} onChange={e => setData({ ...data, github_url: e.target.value })} /></div>
      <div>
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.tags.map((tag: string, i: number) => (
            <div key={i} className="flex items-center gap-1">
              <Input className="w-40" value={tag} onChange={e => { const t = [...data.tags]; t[i] = e.target.value; setData({ ...data, tags: t }); }} />
              <Button variant="ghost" size="icon" onClick={() => setData({ ...data, tags: data.tags.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => setData({ ...data, tags: [...data.tags, ''] })}><Plus className="w-4 h-4 mr-1" /> Add</Button>
        </div>
      </div>
    </div>
  );
}

function AboutEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateHighlight = (i: number, field: string, value: string) => {
    const h = [...data.highlights]; h[i] = { ...h[i], [field]: value }; setData({ ...data, highlights: h });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-3 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
        <div><Label>Title Suffix</Label><Input value={data.title_suffix} onChange={e => setData({ ...data, title_suffix: e.target.value })} /></div>
      </div>
      <div><Label>Description</Label><Textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} rows={4} /></div>
      <div>
        <Label className="text-base font-semibold">Highlights</Label>
        {data.highlights.map((h: any, i: number) => (
          <Card key={i} className="mt-3">
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><Label>Icon</Label><IconPicker value={h.icon} onChange={v => updateHighlight(i, 'icon', v)} /></div>
                <Button variant="ghost" size="icon" onClick={() => setData({ ...data, highlights: data.highlights.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
              </div>
              <div><Label>Title</Label><Input value={h.title} onChange={e => updateHighlight(i, 'title', e.target.value)} /></div>
              <div><Label>Description</Label><Textarea value={h.desc} onChange={e => updateHighlight(i, 'desc', e.target.value)} /></div>
            </CardContent>
          </Card>
        ))}
        <Button variant="outline" size="sm" className="mt-3" onClick={() => setData({ ...data, highlights: [...data.highlights, { icon: 'Star', title: '', desc: '' }] })}>
          <Plus className="w-4 h-4 mr-1" /> Add Highlight
        </Button>
      </div>
    </div>
  );
}

function AICapabilitiesEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateCard = (i: number, field: string, value: any) => {
    const c = [...data.cards]; c[i] = { ...c[i], [field]: value }; setData({ ...data, cards: c });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      {data.cards.map((card: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><Label>Icon</Label><IconPicker value={card.icon} onChange={v => updateCard(i, 'icon', v)} /></div>
              <Button variant="ghost" size="icon" onClick={() => setData({ ...data, cards: data.cards.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
            </div>
            <div><Label>Title</Label><Input value={card.title} onChange={e => updateCard(i, 'title', e.target.value)} /></div>
            <div>
              <Label>Items</Label>
              {card.items.map((item: string, j: number) => (
                <div key={j} className="flex gap-1 mt-1">
                  <Input value={item} onChange={e => { const items = [...card.items]; items[j] = e.target.value; updateCard(i, 'items', items); }} />
                  <Button variant="ghost" size="icon" onClick={() => updateCard(i, 'items', card.items.filter((_: any, k: number) => k !== j))}><Trash2 className="w-4 h-4" /></Button>
                </div>
              ))}
              <Button variant="outline" size="sm" className="mt-2" onClick={() => updateCard(i, 'items', [...card.items, ''])}><Plus className="w-4 h-4 mr-1" /> Add Item</Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, cards: [...data.cards, { icon: 'Star', title: '', items: [''] }] })}><Plus className="w-4 h-4 mr-1" /> Add Card</Button>
    </div>
  );
}

function SkillsEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateCategory = (ci: number, field: string, value: any) => {
    const cats = [...data.categories]; cats[ci] = { ...cats[ci], [field]: value }; setData({ ...data, categories: cats });
  };
  const updateSkill = (ci: number, si: number, field: string, value: any) => {
    const cats = [...data.categories]; const skills = [...cats[ci].skills]; skills[si] = { ...skills[si], [field]: value }; cats[ci] = { ...cats[ci], skills }; setData({ ...data, categories: cats });
  };
  const updateRadar = (i: number, field: string, value: any) => {
    const r = [...data.radarData]; r[i] = { ...r[i], [field]: value }; setData({ ...data, radarData: r });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>

      <Label className="text-base font-semibold">Skill Categories</Label>
      {data.categories.map((cat: any, ci: number) => (
        <Card key={ci}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <Input value={cat.title} onChange={e => updateCategory(ci, 'title', e.target.value)} className="font-semibold" />
              <Button variant="ghost" size="icon" onClick={() => setData({ ...data, categories: data.categories.filter((_: any, j: number) => j !== ci) })}><Trash2 className="w-4 h-4" /></Button>
            </div>
            {cat.skills.map((skill: any, si: number) => (
              <div key={si} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Input value={skill.name} onChange={e => updateSkill(ci, si, 'name', e.target.value)} className="flex-1" />
                  <span className="text-sm font-medium w-12 text-right">{skill.level}%</span>
                  <Button variant="ghost" size="icon" onClick={() => updateCategory(ci, 'skills', cat.skills.filter((_: any, k: number) => k !== si))}><Trash2 className="w-4 h-4" /></Button>
                </div>
                <Slider value={[skill.level]} min={0} max={100} step={1} onValueChange={([v]) => updateSkill(ci, si, 'level', v)} />
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => updateCategory(ci, 'skills', [...cat.skills, { name: '', level: 50 }])}><Plus className="w-4 h-4 mr-1" /> Add Skill</Button>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, categories: [...data.categories, { title: '', skills: [{ name: '', level: 50 }] }] })}><Plus className="w-4 h-4 mr-1" /> Add Category</Button>

      <Label className="text-base font-semibold mt-6 block">Radar Chart Data</Label>
      {data.radarData.map((r: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <Input value={r.subject} onChange={e => updateRadar(i, 'subject', e.target.value)} className="w-32" />
          <Slider value={[r.value]} min={0} max={100} step={1} onValueChange={([v]) => updateRadar(i, 'value', v)} className="flex-1" />
          <span className="text-sm w-10 text-right">{r.value}</span>
          <Button variant="ghost" size="icon" onClick={() => setData({ ...data, radarData: data.radarData.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, radarData: [...data.radarData, { subject: '', value: 50 }] })}><Plus className="w-4 h-4 mr-1" /> Add Radar Point</Button>
    </div>
  );
}

function AIProjectsEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateProject = (i: number, field: string, value: any) => {
    const p = [...data.projects]; p[i] = { ...p[i], [field]: value }; setData({ ...data, projects: p });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      <div><Label>Description</Label><Textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /></div>
      {data.projects.map((p: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><Label className="font-semibold">Project {i + 1}</Label><Button variant="ghost" size="icon" onClick={() => setData({ ...data, projects: data.projects.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button></div>
            <div><Label>Title</Label><Input value={p.title} onChange={e => updateProject(i, 'title', e.target.value)} /></div>
            <div><Label>Description</Label><Textarea value={p.description} onChange={e => updateProject(i, 'description', e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>Live URL</Label><Input value={p.liveUrl || ''} onChange={e => updateProject(i, 'liveUrl', e.target.value)} /></div>
              <div><Label>GitHub URL</Label><Input value={p.githubUrl || ''} onChange={e => updateProject(i, 'githubUrl', e.target.value)} /></div>
            </div>
            <div><Label>Tech (comma separated)</Label><Input value={p.tech.join(', ')} onChange={e => updateProject(i, 'tech', e.target.value.split(',').map((t: string) => t.trim()).filter(Boolean))} /></div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, projects: [...data.projects, { title: '', description: '', tech: [], liveUrl: '', githubUrl: '' }] })}><Plus className="w-4 h-4 mr-1" /> Add Project</Button>
    </div>
  );
}

function PromptShowcaseEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateExample = (i: number, field: string, value: any) => {
    const e = [...data.examples]; e[i] = { ...e[i], [field]: value }; setData({ ...data, examples: e });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      <div><Label>Description</Label><Textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /></div>
      {data.examples.map((ex: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><Label className="font-semibold">{ex.title || `Example ${i + 1}`}</Label><Button variant="ghost" size="icon" onClick={() => setData({ ...data, examples: data.examples.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button></div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>ID</Label><Input value={ex.id} onChange={e => updateExample(i, 'id', e.target.value)} /></div>
              <div><Label>Title</Label><Input value={ex.title} onChange={e => updateExample(i, 'title', e.target.value)} /></div>
            </div>
            {ex.workflow ? (
              <div>
                <Label>Workflow Steps</Label>
                {ex.workflow.map((step: string, j: number) => (
                  <div key={j} className="flex gap-1 mt-1">
                    <Input value={step} onChange={e => { const w = [...ex.workflow]; w[j] = e.target.value; updateExample(i, 'workflow', w); }} />
                    <Button variant="ghost" size="icon" onClick={() => updateExample(i, 'workflow', ex.workflow.filter((_: any, k: number) => k !== j))}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="mt-2" onClick={() => updateExample(i, 'workflow', [...ex.workflow, ''])}><Plus className="w-4 h-4 mr-1" /> Add Step</Button>
              </div>
            ) : (
              <>
                <div><Label>Prompt</Label><Textarea value={ex.prompt || ''} onChange={e => updateExample(i, 'prompt', e.target.value)} rows={4} /></div>
                <div><Label>Output</Label><Textarea value={ex.output || ''} onChange={e => updateExample(i, 'output', e.target.value)} /></div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function CurrentlyExploringEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2"><Label>Icon</Label><IconPicker value={data.icon} onChange={v => setData({ ...data, icon: v })} /></div>
      <div><Label>Label</Label><Input value={data.label} onChange={e => setData({ ...data, label: e.target.value })} /></div>
      <div>
        <Label>Topics</Label>
        {data.topics.map((topic: string, i: number) => (
          <div key={i} className="flex gap-1 mt-1">
            <Input value={topic} onChange={e => { const t = [...data.topics]; t[i] = e.target.value; setData({ ...data, topics: t }); }} />
            <Button variant="ghost" size="icon" onClick={() => setData({ ...data, topics: data.topics.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
          </div>
        ))}
        <Button variant="outline" size="sm" className="mt-2" onClick={() => setData({ ...data, topics: [...data.topics, ''] })}><Plus className="w-4 h-4 mr-1" /> Add Topic</Button>
      </div>
    </div>
  );
}

function ExperienceEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      <div className="flex items-center gap-2"><Label>Icon</Label><IconPicker value={data.icon} onChange={v => setData({ ...data, icon: v })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Job Title</Label><Input value={data.job_title} onChange={e => setData({ ...data, job_title: e.target.value })} /></div>
        <div><Label>Company</Label><Input value={data.company} onChange={e => setData({ ...data, company: e.target.value })} /></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Period</Label><Input value={data.period} onChange={e => setData({ ...data, period: e.target.value })} /></div>
        <div><Label>Location</Label><Input value={data.location} onChange={e => setData({ ...data, location: e.target.value })} /></div>
      </div>
      <div>
        <Label>Achievements</Label>
        {data.achievements.map((a: string, i: number) => (
          <div key={i} className="flex gap-1 mt-1">
            <Input value={a} onChange={e => { const ac = [...data.achievements]; ac[i] = e.target.value; setData({ ...data, achievements: ac }); }} />
            <Button variant="ghost" size="icon" onClick={() => setData({ ...data, achievements: data.achievements.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button>
          </div>
        ))}
        <Button variant="outline" size="sm" className="mt-2" onClick={() => setData({ ...data, achievements: [...data.achievements, ''] })}><Plus className="w-4 h-4 mr-1" /> Add Achievement</Button>
      </div>
    </div>
  );
}

function ProjectsEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateProject = (i: number, field: string, value: any) => {
    const p = [...data.projects]; p[i] = { ...p[i], [field]: value }; setData({ ...data, projects: p });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      {data.projects.map((p: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><Label className="font-semibold">{p.name || `Project ${i + 1}`}</Label><Button variant="ghost" size="icon" onClick={() => setData({ ...data, projects: data.projects.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button></div>
            <div><Label>Name</Label><Input value={p.name} onChange={e => updateProject(i, 'name', e.target.value)} /></div>
            <div><Label>Description</Label><Textarea value={p.desc} onChange={e => updateProject(i, 'desc', e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>Live URL</Label><Input value={p.link} onChange={e => updateProject(i, 'link', e.target.value)} /></div>
              <div><Label>GitHub URL</Label><Input value={p.github} onChange={e => updateProject(i, 'github', e.target.value)} /></div>
            </div>
            <div><Label>Tech (comma separated)</Label><Input value={p.tech.join(', ')} onChange={e => updateProject(i, 'tech', e.target.value.split(',').map((t: string) => t.trim()).filter(Boolean))} /></div>
            <div className="flex items-center gap-2">
              <Switch checked={p.highlight} onCheckedChange={v => updateProject(i, 'highlight', v)} />
              <Label>Highlight / Top Project</Label>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, projects: [...data.projects, { name: '', desc: '', tech: [], link: '', github: '', highlight: false }] })}><Plus className="w-4 h-4 mr-1" /> Add Project</Button>
    </div>
  );
}

function EducationEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateEntry = (i: number, field: string, value: any) => {
    const e = [...data.entries]; e[i] = { ...e[i], [field]: value }; setData({ ...data, entries: e });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      {data.entries.map((entry: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><Label className="font-semibold">{entry.degree || `Entry ${i + 1}`}</Label><Button variant="ghost" size="icon" onClick={() => setData({ ...data, entries: data.entries.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button></div>
            <div><Label>Degree</Label><Input value={entry.degree} onChange={e => updateEntry(i, 'degree', e.target.value)} /></div>
            <div><Label>School</Label><Input value={entry.school} onChange={e => updateEntry(i, 'school', e.target.value)} /></div>
            <div><Label>Period</Label><Input value={entry.period} onChange={e => updateEntry(i, 'period', e.target.value)} /></div>
            <div className="flex items-center gap-2">
              <Switch checked={entry.current} onCheckedChange={v => updateEntry(i, 'current', v)} />
              <Label>Currently Pursuing</Label>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, entries: [...data.entries, { degree: '', school: '', period: '', current: false }] })}><Plus className="w-4 h-4 mr-1" /> Add Entry</Button>
    </div>
  );
}

function CertificationsEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  const updateCert = (i: number, field: string, value: any) => {
    const c = [...data.certs]; c[i] = { ...c[i], [field]: value }; setData({ ...data, certs: c });
  };
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      <div className="flex items-center gap-2"><Label>Default Icon</Label><IconPicker value={data.icon} onChange={v => setData({ ...data, icon: v })} /></div>
      {data.certs.map((cert: any, i: number) => (
        <Card key={i}>
          <CardContent className="pt-4 space-y-3">
            <div className="flex justify-between"><Label className="font-semibold">{cert.title || `Cert ${i + 1}`}</Label><Button variant="ghost" size="icon" onClick={() => setData({ ...data, certs: data.certs.filter((_: any, j: number) => j !== i) })}><Trash2 className="w-4 h-4" /></Button></div>
            <div className="flex items-center gap-2"><Label>Icon</Label><IconPicker value={cert.icon || data.icon} onChange={v => updateCert(i, 'icon', v)} /></div>
            <div><Label>Title</Label><Input value={cert.title} onChange={e => updateCert(i, 'title', e.target.value)} /></div>
            <div><Label>Issuers (comma separated)</Label><Input value={cert.issuers.join(', ')} onChange={e => updateCert(i, 'issuers', e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean))} /></div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" size="sm" onClick={() => setData({ ...data, certs: [...data.certs, { title: '', issuers: [], icon: data.icon }] })}><Plus className="w-4 h-4 mr-1" /> Add Certification</Button>
    </div>
  );
}

function ContactEditor({ data, setData }: { data: any; setData: (d: any) => void }) {
  return (
    <div className="space-y-4">
      <div><Label>Section Label</Label><Input value={data.section_label} onChange={e => setData({ ...data, section_label: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Title Prefix</Label><Input value={data.title_prefix} onChange={e => setData({ ...data, title_prefix: e.target.value })} /></div>
        <div><Label>Title Highlight</Label><Input value={data.title_highlight} onChange={e => setData({ ...data, title_highlight: e.target.value })} /></div>
      </div>
      <div><Label>Description</Label><Textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>Email</Label><Input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} /></div>
        <div><Label>Phone</Label><Input value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} /></div>
      </div>
      <div><Label>Location</Label><Input value={data.location} onChange={e => setData({ ...data, location: e.target.value })} /></div>
      <div className="grid grid-cols-2 gap-2">
        <div><Label>GitHub URL</Label><Input value={data.github} onChange={e => setData({ ...data, github: e.target.value })} /></div>
        <div><Label>LinkedIn URL</Label><Input value={data.linkedin} onChange={e => setData({ ...data, linkedin: e.target.value })} /></div>
      </div>
      <div><Label>WhatsApp Number</Label><Input value={data.whatsapp_number} onChange={e => setData({ ...data, whatsapp_number: e.target.value })} /></div>
      <div><Label>Footer Text</Label><Input value={data.footer_text} onChange={e => setData({ ...data, footer_text: e.target.value })} /></div>
    </div>
  );
}

const EDITORS: Record<string, React.FC<{ data: any; setData: (d: any) => void }>> = {
  hero: HeroEditor,
  about: AboutEditor,
  ai_capabilities: AICapabilitiesEditor,
  ai_projects: AIProjectsEditor,
  skills: SkillsEditor,
  prompt_showcase: PromptShowcaseEditor,
  currently_exploring: CurrentlyExploringEditor,
  experience: ExperienceEditor,
  projects: ProjectsEditor,
  education: EducationEditor,
  certifications: CertificationsEditor,
  contact: ContactEditor,
};

const ContentManager: React.FC = () => {
  const { toast } = useToast();
  const [sectionData, setSectionData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      const { data, error } = await supabase.from('site_content').select('section_key, content');
      if (error) { toast({ title: 'Error loading content', description: error.message, variant: 'destructive' }); setLoading(false); return; }
      const map: Record<string, any> = {};
      SECTIONS.forEach(s => {
        const found = data?.find(d => d.section_key === s.key);
        map[s.key] = found ? { ...DEFAULTS[s.key], ...(found.content as any) } : { ...DEFAULTS[s.key] };
      });
      setSectionData(map);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const handleSave = async (sectionKey: string) => {
    setSaving(sectionKey);
    try {
      await upsertSiteContent(sectionKey, sectionData[sectionKey]);
      toast({ title: 'Saved!', description: `${sectionKey} content updated successfully.` });
    } catch (e: any) {
      toast({ title: 'Error saving', description: e.message, variant: 'destructive' });
    }
    setSaving(null);
  };

  const handleResetSection = (sectionKey: string) => {
    setSectionData(prev => ({ ...prev, [sectionKey]: { ...DEFAULTS[sectionKey] } }));
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading content...</div>;

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="space-y-2">
        {SECTIONS.map(section => {
          const Editor = EDITORS[section.key];
          const data = sectionData[section.key];
          if (!Editor || !data) return null;
          return (
            <AccordionItem key={section.key} value={section.key} className="border rounded-lg px-4">
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                {section.label}
              </AccordionTrigger>
              <AccordionContent>
                <div className="pb-4">
                  <Editor data={data} setData={d => setSectionData(prev => ({ ...prev, [section.key]: d }))} />
                  <div className="flex gap-2 mt-6">
                    <Button onClick={() => handleSave(section.key)} disabled={saving === section.key}>
                      <Save className="w-4 h-4 mr-2" /> {saving === section.key ? 'Saving...' : 'Save'}
                    </Button>
                    <Button variant="outline" onClick={() => handleResetSection(section.key)}>Reset to Default</Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ContentManager;
