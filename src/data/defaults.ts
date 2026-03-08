export const heroDefaults = {
  name_prefix: 'SK ',
  name_highlight: 'Harish Kanna',
  subtitle: 'AI Engineer | Full Stack Developer | LLM Applications',
  tags: ['AI Engineer', 'LLM Applications', 'Python Developer', 'Generative AI'],
  description: 'Python developer building intelligent web applications with Agentic AI systems, Generative AI, and modern full-stack technologies.',
  status_text: 'Available for opportunities',
  email: 'harishkanna068@gmail.com',
  location: 'India',
  github_url: 'https://github.com',
};

export const aboutDefaults = {
  section_label: 'About Me',
  title_prefix: 'Turning ',
  title_highlight: 'Ideas',
  title_suffix: ' Into Reality',
  description: 'I am a full stack developer focused on building intelligent applications powered by Agentic AI, Generative AI, and modern web technologies. I specialize in creating AI-driven tools that automate workflows, improve decision-making, and deliver scalable digital solutions. With expertise in prompt engineering and LLM integrations, I bridge the gap between cutting-edge AI capabilities and production-ready applications.',
  highlights: [
    { icon: 'Bot', title: 'Agentic AI Systems', desc: 'Designing autonomous AI workflows with prompt chaining, tool-based agents, and intelligent task automation.' },
    { icon: 'Code2', title: 'Full Stack Development', desc: 'Building scalable web applications with React, TypeScript, and modern backend services like Supabase.' },
    { icon: 'Sparkles', title: 'AI-Powered Solutions', desc: 'Leveraging Generative AI tools and LLM integrations to automate workflows and deliver scalable digital solutions.' },
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
      title: 'Machine Learning Applications',
      items: ['Data-driven insights and analytics', 'AI-powered predictions', 'Intelligent recommendation systems'],
    },
  ],
};

export const aiProjectsDefaults = {
  section_label: 'AI Projects',
  title_prefix: 'Building ',
  title_highlight: 'Intelligent Systems',
  description: 'Real-world AI applications using Machine Learning, LLM workflows, and intelligent automation.',
  projects: [
    {
      title: 'InvexAI – AI Inventory Management',
      description: 'An AI-powered inventory prediction system that analyzes historical sales data to forecast future stock demand using machine learning models.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI-Powered Skill Swap Platform',
      description: 'An intelligent skill-matching platform that uses AI to connect learners with complementary skills for peer-to-peer knowledge exchange.',
      tech: ['React', 'TypeScript', 'Supabase', 'GPT-4', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'HELLA AI – Intelligent Chatbot',
      description: 'A conversational AI chatbot built with LLM workflows, capable of context-aware responses and multi-turn dialogue management.',
      tech: ['Python', 'LangChain', 'GPT-4', 'FastAPI', 'React'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Intrusion Detection System (IDS)',
      description: 'A machine learning-based network intrusion detection system that classifies network traffic patterns to identify potential security threats.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NetworkX'],
      githubUrl: '#',
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
  ],
  radarData: [
    { subject: 'AI/ML', value: 85 },
    { subject: 'Frontend', value: 87 },
    { subject: 'Backend', value: 76 },
    { subject: 'Prompt Eng.', value: 92 },
    { subject: 'Tools', value: 80 },
    { subject: 'System Design', value: 70 },
  ],
};

export const promptShowcaseDefaults = {
  section_label: 'Prompt Engineering',
  title_prefix: 'LLM ',
  title_highlight: 'Workflow Design',
  description: 'Demonstrating structured prompt design, LLM architecture thinking, and AI automation workflows.',
  examples: [
    {
      id: 'content',
      title: 'AI Content Generator',
      prompt: `Role: AI Content Strategist\nTask: Generate SEO optimized article\nConstraints: 1000 words, keyword density 2%\nOutput Format: Markdown with headings`,
      output: 'Structured, keyword-rich articles with proper heading hierarchy and meta descriptions.',
    },
    {
      id: 'data',
      title: 'AI Data Analyzer',
      prompt: `Analyze the dataset and detect anomalies\nin sales patterns.\n\nReturn:\n  - Key insights\n  - Predictions for next quarter\n  - Visual summary recommendations`,
      output: 'Automated anomaly detection with actionable insights and visualization suggestions.',
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot Logic',
      workflow: ['User Input', 'Prompt Template', 'LLM Processing', 'Structured Output'],
    },
  ],
};

export const currentlyExploringDefaults = {
  icon: 'Rocket',
  label: 'Currently Exploring',
  topics: ['Agentic AI', 'Autonomous AI Workflows', 'RAG Systems', 'AI Agents', 'Multi-Agent Orchestration', 'Fine-Tuning LLMs', 'LLM Applications'],
};

export const experienceDefaults = {
  section_label: 'Experience',
  title_prefix: "Where I've ",
  title_highlight: 'Worked',
  job_title: 'Software Developer Intern',
  company: 'Marzelet Info Tech',
  period: 'January 2026 — Present',
  location: 'Chennai, India',
  icon: 'Briefcase',
  achievements: [
    'Built AI-driven applications using prompt engineering and LLM integrations',
    'Developed front-end UI components using React, TypeScript, and modern frameworks',
    'Integrated backend services such as Supabase and Netlify for scalable deployment',
    'Designed AI workflows and automation systems using Generative AI tools',
    'Engineered prompt templates improving response accuracy by 30–40%',
    'Built multiple deployed AI-powered applications including inventory and skill-exchange platforms',
    'Implemented Agentic AI patterns for autonomous task execution and intelligent recommendations',
  ],
};

export const projectsDefaults = {
  section_label: 'Projects',
  title_prefix: 'Featured ',
  title_highlight: 'Work',
  projects: [
    { name: 'InvexAI', desc: 'AI-powered inventory management system for SMEs with Gemini-driven demand forecasting, sales analysis, and real-time stock monitoring.', tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Gemini'], link: 'https://invexai.netlify.app', github: '#', highlight: true, screenshot: '' },
    { name: 'SkillSwap', desc: 'Peer-to-peer skill exchange platform with AI-powered matching system, real-time chat, and community ratings for collaborative learning.', tech: ['React', 'TailwindCSS', 'Supabase', 'Firebase'], link: 'https://skillswappro.netlify.app', github: '#', highlight: true, screenshot: '' },
    { name: 'SAP HR ERP', desc: 'Enterprise HR management system digitizing employee data, attendance tracking, leave management, and payroll integration.', tech: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'], link: 'https://saphr.netlify.app', github: '#', highlight: true, screenshot: '' },
    { name: 'Billing Software', desc: 'Custom billing system for mechanic shops with automated invoicing, real-time calculations, and mobile-friendly interface.', tech: ['React', 'TailwindCSS', 'Gemini', 'Supabase'], link: 'https://om-muruga-billing.netlify.app', github: '#', highlight: false, screenshot: '' },
    { name: 'Hoops Hub', desc: 'Online basketball store with product catalog, customer reviews, and secure checkout built with modern web technologies.', tech: ['React', 'TailwindCSS', 'TypeScript'], link: 'https://deluxe-gumption-e4e2c7.netlify.app', github: '#', highlight: false, screenshot: '' },
    { name: 'HELLA AI', desc: 'Advanced AI-powered chatbot leveraging Gemini for intelligent, human-like conversations across research, coding, and business strategies.', tech: ['React', 'TailwindCSS', 'Gemini', 'TypeScript'], link: 'https://hellalogin.netlify.app', github: '#', highlight: false, screenshot: '' },
  ],
};

export const educationDefaults = {
  section_label: 'Education',
  title_prefix: 'Academic ',
  title_highlight: 'Journey',
  entries: [
    { degree: 'BE — Computer Science Engineering', school: 'SA Engineering College, Chennai', period: 'July 2022 — July 2026', current: true },
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
    { title: 'Agentic AI', issuers: ['Anthropic (Open Claw)'], icon: 'Award' },
    { title: 'Claude Code in Action', issuers: ['Anthropic'], icon: 'Award' },
  ],
};

export const contactDefaults = {
  section_label: 'Contact',
  title_prefix: "Let's Build ",
  title_highlight: 'Together',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email: 'harishkanna068@gmail.com',
  phone: '+91 8056073997',
  location: 'India',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  whatsapp_number: '918056073997',
  footer_text: '© 2026 SK Harish Kanna. Built with passion and precision.',
};
