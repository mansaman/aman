import type { Metadata } from 'next';
import ProjectsView from '@/components/views/ProjectsView';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Eight growth disciplines — SEO, performance, GTM, CRM, AI, websites, automation — and the results they produced when run as one system.',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
