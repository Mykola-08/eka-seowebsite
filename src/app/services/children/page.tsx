import { Metadata } from 'next';
import ChildrenContent from '@/app/components/ChildrenContent';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Terapias Infantiles | EKA Balance',
  description: 'Kinesiología y apoyo al desarrollo para niños.',
};

export default function ChildrenPage() {
  return <ChildrenContent />;
}
