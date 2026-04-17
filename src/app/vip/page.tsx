import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import VIPContent from '@/components/VIPContent';




export default function VIPPage() {
  return (
    <VIPContent />
  );
}

export async function generateMetadata() {
  return generateAppMetadata('vip', '/vip');
}
