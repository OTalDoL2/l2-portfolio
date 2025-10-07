import { myProjects } from '../data';
import SelectedProjectPage from './SelectedProjectPage';
import { notFound } from 'next/navigation';

// interface ProjectPageProps {
//   params: Promise<{ slug: string }>;
// }

type ProjectPageProps = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return myProjects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <SelectedProjectPage project={project} />;
}
