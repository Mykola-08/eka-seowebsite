import { permanentRedirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function AgenyzPage() {
  permanentRedirect('https://agenyz.es');
}
