import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

const locales = ['pt', 'en'];

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = myProjects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
