import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import DynamicIcon from '@/components/DynamicIcon';
import ScrollAnimation from '@/components/ScrollAnimation';

interface CustomItem {
  icon: string;
  title: string;
  description: string;
}

interface CustomSectionData {
  section_label: string;
  title_prefix: string;
  title_highlight: string;
  items: CustomItem[];
}

const CustomSections: React.FC<{ order: string[] }> = ({ order }) => {
  const { data: sections } = useQuery({
    queryKey: ['custom-sections'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_content')
        .select('section_key, content')
        .like('section_key', 'custom_%');
      if (error) throw error;
      return (data || []).map(d => ({
        key: d.section_key,
        content: d.content as unknown as CustomSectionData,
      }));
    },
    staleTime: 1000 * 60 * 5,
  });

  if (!sections?.length) return null;

  const sectionMap = new Map(sections.map(s => [s.key, s]));
  const customKeysInOrder = order.filter(k => k.startsWith('custom_') && sectionMap.has(k));
  sections.forEach(s => { if (!customKeysInOrder.includes(s.key)) customKeysInOrder.push(s.key); });

  return (
    <>
      {customKeysInOrder.map(key => {
        const section = sectionMap.get(key);
        if (!section) return null;
        const { content } = section;
        return (
          <section key={key} className="section-padding max-w-3xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                {content.title_prefix} {content.title_highlight}
              </h2>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(content.items || []).map((item, i) => (
                <ScrollAnimation key={i} delay={i * 0.05}>
                  <div className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
                    <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center mb-3">
                      <DynamicIcon name={item.icon} className="w-4 h-4 text-foreground" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CustomSections;
