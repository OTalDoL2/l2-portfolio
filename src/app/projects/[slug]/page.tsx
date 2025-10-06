import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';

interface PageProps {
  params: Promise<{ slug: string }>; 
}

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params, }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams; 
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return <SelectedProjectPage project={project} />;
}