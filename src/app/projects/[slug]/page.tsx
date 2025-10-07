import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug
  }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: any) {
  const { slug } = params;
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
