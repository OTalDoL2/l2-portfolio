import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug; 
  console.log(slug + " aparece normal....")
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
