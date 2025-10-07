import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return <SelectedProjectPage project={project} />;
}
