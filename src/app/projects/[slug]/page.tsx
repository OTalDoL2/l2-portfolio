import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug
  }));
}

export type paramsType = { slug: string };

type Props = {
  params: paramsType;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params; // sem await
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
