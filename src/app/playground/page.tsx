import type { Metadata } from 'next';
import PlaygroundView from '@/components/views/PlaygroundView';

export const metadata: Metadata = {
  title: 'Playground',
  description:
    'Experiments in progress — growth tests, AI tools, designs, and components built in public.',
};

export default function PlaygroundPage() {
  return <PlaygroundView />;
}
