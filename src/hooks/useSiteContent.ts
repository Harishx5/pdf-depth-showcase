import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export function useSiteContent<T>(sectionKey: string, fallback: T): { data: T; isLoading: boolean } {
  const { data, isLoading } = useQuery({
    queryKey: ['site-content', sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('section_key', sectionKey)
        .maybeSingle();
      if (error) throw error;
      return data?.content as T | null;
    },
    staleTime: 1000 * 60 * 5,
  });

  return { data: data ?? fallback, isLoading };
}

export async function upsertSiteContent(sectionKey: string, content: unknown) {
  const { error } = await supabase
    .from('site_content')
    .upsert({ section_key: sectionKey, content: content as any }, { onConflict: 'section_key' });
  if (error) throw error;
}
