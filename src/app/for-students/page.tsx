import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import ForStudentsContent from '@/components/ForStudentsContent';




export default function StudentsPage() {
  return <ForStudentsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('forStudents', '/for-students');
}
