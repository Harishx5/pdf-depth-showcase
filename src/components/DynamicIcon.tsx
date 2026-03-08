import { icons } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon {...props} />;
};

export default DynamicIcon;

export const ICON_OPTIONS = [
  'Bot', 'Code2', 'Sparkles', 'Cpu', 'BarChart3', 'Terminal', 'Rocket',
  'Briefcase', 'GraduationCap', 'Award', 'Mail', 'Phone', 'MapPin',
  'Github', 'Linkedin', 'Globe', 'Zap', 'Brain', 'Layers', 'Database',
  'Server', 'Shield', 'Lock', 'Key', 'Settings', 'Wrench', 'Hammer',
  'Palette', 'Pen', 'FileText', 'BookOpen', 'Monitor', 'Smartphone',
  'Cloud', 'Download', 'Upload', 'Search', 'Star', 'Heart', 'ThumbsUp',
  'MessageCircle', 'Users', 'User', 'Home', 'Building', 'Compass',
  'Target', 'TrendingUp', 'Activity', 'BarChart', 'PieChart', 'LineChart',
  'CheckCircle2', 'ArrowRight', 'ExternalLink', 'Link2', 'FileDown',
  'Lightbulb', 'Flame', 'Trophy', 'Medal', 'Crown', 'Gem',
];
