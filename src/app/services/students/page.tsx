import { generateAppMetadata } from '@/lib/seo';
import ForStudentsContent from '@/components/ForStudentsContent';



export default function StudentsPage() {
  return <ForStudentsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/students');
}
