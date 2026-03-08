import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

const getSessionId = () => {
  let sid = sessionStorage.getItem('visitor_session_id');
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem('visitor_session_id', sid);
  }
  return sid;
};

export const useVisitorTracking = () => {
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sessionId = getSessionId();

    supabase.from('site_visits').insert({
      session_id: sessionId,
      visitor_email: null,
      page_url: window.location.pathname,
      section_viewed: 'page_load',
      user_agent: navigator.userAgent,
    });

    // Track sections via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !trackedSections.current.has(sectionId)) {
              trackedSections.current.add(sectionId);
              supabase.from('site_visits').insert({
                session_id: getSessionId(),
                visitor_email: null,
                page_url: window.location.pathname,
                section_viewed: sectionId,
                user_agent: navigator.userAgent,
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      document.querySelectorAll('section[id], div[id]').forEach((el) => {
        if (el.id) observer.observe(el);
      });
    }, 1000);

    return () => observer.disconnect();
  }, []);
};
