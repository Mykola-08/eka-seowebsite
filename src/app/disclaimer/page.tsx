import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import DisclaimerContent from '@/components/DisclaimerContent';



export default function DisclaimerPage() {
  return <DisclaimerContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('disclaimer', '/disclaimer');
}
