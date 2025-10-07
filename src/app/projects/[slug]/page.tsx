import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

// import type { PageProps } from 'next'; // Global helper for typing

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug
  }));
}

export type paramsType = { slug: string };

type Props = {
  params: paramsType;
};

type ProjectPageParams = {
  slug: string;
};

export default function ProjectPage({ params }: PageProps<ProjectPageParams>) {
  const { slug } = params; // sem await
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
