import type { Metadata } from 'next';
import ContactView from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Direct lines to Aman Sharma — email, phone, LinkedIn, and GitHub. Open to growth and performance marketing roles.',
};

export default function ContactPage() {
  return <ContactView />;
}
