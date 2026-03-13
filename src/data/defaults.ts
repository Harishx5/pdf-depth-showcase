export const heroDefaults = {
  name: 'SK Harish Kanna',
  subtitle: 'AI Engineer & Full Stack Developer',
  description: 'I build intelligent web applications using machine learning, LLM integrations, and modern frontend technologies. Focused on practical AI systems that solve real problems.',
  email: 'harishkanna068@gmail.com',
  github_url: 'https://github.com',
  linkedin_url: 'https://linkedin.com',
  resume_url: '/resume.pdf',
};

export const aboutDefaults = {
  section_label: 'About Me',
  title_prefix: '',
  title_highlight: '',
  title_suffix: '',
  description: 'Full stack developer specializing in AI-driven applications. I work with Python, React, and TypeScript to build tools that automate workflows and improve decision-making. My focus is on prompt engineering, LLM integrations, and building production-ready AI systems.',
  highlights: [
    { icon: 'Bot', title: 'Agentic AI Systems', desc: 'Designing autonomous AI workflows with prompt chaining, tool-based agents, and intelligent task automation.' },
    { icon: 'Code2', title: 'Full Stack Development', desc: 'Building web applications with React, TypeScript, and backend services like Supabase and FastAPI.' },
    { icon: 'Sparkles', title: 'AI Integration', desc: 'Connecting LLMs to production systems for content generation, data analysis, and workflow automation.' },
  ],
};

export const aiCapabilitiesDefaults = {
  section_label: 'Expertise',
  title_prefix: 'AI ',
  title_highlight: 'Capabilities',
  cards: [
    {
      icon: 'Bot',
      title: 'Agentic AI Systems',
      items: ['Designing autonomous AI workflows', 'Prompt chaining and tool-based agents', 'AI task automation and orchestration'],
    },
    {
      icon: 'Cpu',
      title: 'Generative AI',
      items: ['GPT-4 and Gemini integrations', 'Advanced prompt engineering', 'AI content generation systems'],
    },
    {
      icon: 'BarChart3',
      title: 'Machine Learning',
      items: ['Data-driven insights and analytics', 'Prediction models', 'Recommendation systems'],
    },
  ],
};

export const aiProjectsDefaults = {
  section_label: 'AI Projects',
  title_prefix: 'Building ',
  title_highlight: 'Intelligent Systems',
  description: 'Applied AI projects using machine learning, LLM workflows, and automation.',
  projects: [
    {
      title: 'InvexAI – Inventory Prediction',
      description: 'Uses historical sales data to forecast stock demand with machine learning models. Built the data pipeline, trained regression models, and deployed via Flask.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      screenshot: '',
    },
    {
      title: 'Skill Swap Platform',
      description: 'Matches learners with complementary skills using AI-based similarity scoring. Features real-time chat and a rating system for peer accountability.',
      tech: ['React', 'TypeScript', 'Supabase', 'GPT-4', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
      screenshot: '',
    },
    {
      title: 'HELLA AI – Chatbot',
      description: 'Context-aware chatbot handling multi-turn dialogue. Built with LangChain for conversation memory and structured output parsing.',
      tech: ['Python', 'LangChain', 'GPT-4', 'FastAPI', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      screenshot: '',
    },
    {
      title: 'Network Intrusion Detection',
      description: 'Classifies network traffic patterns to detect potential security threats using supervised learning on the NSL-KDD dataset.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
      githubUrl: '#',
      screenshot: '',
    },
  ],
};

export const skillsDefaults = {
  section_label: 'Skills',
  title_prefix: 'My ',
  title_highlight: 'Toolkit',
  categories: [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Prompt Engineering' },
        { name: 'Generative AI' },
        { name: 'Machine Learning' },
        { name: 'LLM Workflows' },
        { name: 'AI Automation' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python' },
        { name: 'Flask' },
        { name: 'FastAPI' },
        { name: 'SQL / MySQL' },
        { name: 'Supabase' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'TailwindCSS' },
        { name: 'HTML / CSS' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'Firebase' },
        { name: 'Netlify' },
        { name: 'API Integration' },
      ],
    },
  ],
};

export const promptShowcaseDefaults = {
  section_label: 'Prompt Engineering',
  title_prefix: 'LLM ',
  title_highlight: 'Workflow Design',
  description: 'Examples of structured prompt design and LLM workflow patterns I use in projects.',
  examples: [
    {
      id: 'content',
      title: 'Content Generator',
      prompt: `Role: AI Content Strategist\nTask: Generate SEO optimized article\nConstraints: 1000 words, keyword density 2%\nOutput Format: Markdown with headings`,
      output: 'Structured, keyword-rich articles with proper heading hierarchy and meta descriptions.',
    },
    {
      id: 'data',
      title: 'Data Analyzer',
      prompt: `Analyze the dataset and detect anomalies\nin sales patterns.\n\nReturn:\n  - Key insights\n  - Predictions for next quarter\n  - Visual summary recommendations`,
      output: 'Automated anomaly detection with actionable insights and visualization suggestions.',
    },
    {
      id: 'chatbot',
      title: 'Chatbot Pipeline',
      workflow: ['User Input', 'Prompt Template', 'LLM Processing', 'Structured Output'],
    },
  ],
};

export const currentlyExploringDefaults = {
  icon: 'Rocket',
  label: 'Currently Exploring',
  topics: ['Agentic AI', 'RAG Systems', 'AI Agents', 'Multi-Agent Orchestration', 'Fine-Tuning LLMs', 'LLM Applications'],
};

export const experienceDefaults = {
  section_label: 'Experience',
  title_prefix: "Where I've ",
  title_highlight: 'Worked',
  job_title: 'Software Developer Intern',
  company: 'Marzelet Info Tech',
  period: 'Jan 2026 — Present',
  location: 'Chennai, India',
  icon: 'Briefcase',
  achievements: [
    'Built AI-driven applications using prompt engineering and LLM integrations',
    'Developed frontend components with React, TypeScript, and TailwindCSS',
    'Integrated Supabase for auth, database, and real-time features',
    'Designed prompt templates that improved response accuracy by 30–40%',
    'Shipped deployed applications including inventory and skill-exchange platforms',
  ],
};

export const projectsDefaults = {
  section_label: 'Projects',
  title_prefix: 'Featured ',
  title_highlight: 'Work',
  projects: [
    { name: 'InvexAI', desc: 'Inventory management system for SMEs with Gemini-driven demand forecasting, sales analysis, and real-time stock monitoring.', tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Gemini'], link: 'https://invexai.netlify.app', github: '#', screenshot: '' },
    { name: 'SkillSwap', desc: 'Peer-to-peer skill exchange platform with AI-powered matching, real-time chat, and community ratings.', tech: ['React', 'TailwindCSS', 'Supabase', 'Firebase'], link: 'https://skillswappro.netlify.app', github: '#', screenshot: '' },
    { name: 'SAP HR ERP', desc: 'HR management system digitizing employee data, attendance tracking, leave management, and payroll integration.', tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'], link: 'https://saphr.netlify.app', github: '#', screenshot: '' },
    { name: 'Billing Software', desc: 'Billing system for mechanic shops with automated invoicing, real-time calculations, and mobile-friendly UI.', tech: ['React', 'TailwindCSS', 'Gemini', 'Supabase'], link: 'https://om-muruga-billing.netlify.app', github: '#', screenshot: '' },
    { name: 'Hoops Hub', desc: 'Online basketball store with product catalog, reviews, and checkout.', tech: ['React', 'TailwindCSS', 'TypeScript'], link: 'https://deluxe-gumption-e4e2c7.netlify.app', github: '#', screenshot: '' },
    { name: 'HELLA AI', desc: 'AI chatbot using Gemini for conversational research, coding assistance, and strategy discussions.', tech: ['React', 'TailwindCSS', 'Gemini', 'TypeScript'], link: 'https://hellalogin.netlify.app', github: '#', screenshot: '' },
  ],
};

export const educationDefaults = {
  section_label: 'Education',
  title_prefix: 'Academic ',
  title_highlight: 'Journey',
  entries: [
    { degree: 'BE — Computer Science Engineering', school: 'SA Engineering College, Chennai', period: '2022 — 2026', current: true },
    { degree: '12th Standard', school: 'Maharishi Vidya Mandir Matric Hr Sec School, Chennai', period: '2020 — 2022', current: false },
    { degree: '10th Standard', school: 'Maharishi Vidya Mandir Senior Secondary School, Chennai', period: '2019 — 2020', current: false },
  ],
};

export const certificationsDefaults = {
  section_label: 'Certifications',
  title_prefix: 'Professional ',
  title_highlight: 'Credentials',
  icon: 'Award',
  certs: [
    { title: 'Certified Specialist in Generative AI', issuers: ['Microsoft', 'IBM', 'AWS', 'Oracle'], icon: 'Award' },
    { title: 'AI Tools Mastery Certification', issuers: ['Microsoft', 'IBM', 'AIGENXT'], icon: 'Award' },
    { title: 'AI Prompt Engineering', issuers: ['Microsoft', 'IBM', 'AWS', 'Infosys'], icon: 'Award' },
    { title: 'ChatGPT on Python', issuers: ['Simplilearn'], icon: 'Award' },
    { title: 'Agentic AI', issuers: ['Anthropic'], icon: 'Award' },
    { title: 'Claude Code in Action', issuers: ['Anthropic'], icon: 'Award' },
  ],
};

export const contactDefaults = {
  section_label: 'Contact',
  title_prefix: 'Get in ',
  title_highlight: 'Touch',
  description: "Open to discussing projects, collaborations, or opportunities. Feel free to reach out.",
  email: 'harishkanna068@gmail.com',
  phone: '+91 8056073997',
  location: 'India',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  whatsapp_number: '918056073997',
  footer_text: 'SK Harish Kanna',
};

export const navbarDefaults = {
  brand: 'SK Harish Kanna',
  links: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const DEFAULT_SECTION_ORDER = [
  'hero',
  'about',
  'ai_capabilities',
  'ai_projects',
  'skills',
  'prompt_showcase',
  'currently_exploring',
  'experience',
  'projects',
  'education',
  'certifications',
  'contact',
];
