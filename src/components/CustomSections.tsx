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

const CustomSections: React.FC = () => {
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

  return (
    <>
      {sections.map(({ key, content }) => (
        <section key={key} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {content.title_prefix}{' '}
                  <span className="text-primary">{content.title_highlight}</span>
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(content.items || []).map((item, i) => (
                <ScrollAnimation key={i} delay={i * 0.1}>
                  <div className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <DynamicIcon name={item.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CustomSections;
